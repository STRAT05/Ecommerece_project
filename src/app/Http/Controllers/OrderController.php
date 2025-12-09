<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    // List all orders for the authenticated user
    public function index()
    {
        $orders = Order::where('user_id', Auth::id())->with('products')->get();
        return response()->json($orders);
    }

    // Create a new order from cart
    public function store(Request $request)
    {
        $user = Auth::user();
        $cartItems = $user->cartItems;

        if ($cartItems->isEmpty()) {
            return response()->json(['message' => 'Cart is empty'], 400);
        }

        try {
            DB::transaction(function () use ($cartItems, $user) {
                $total = 0;

                foreach ($cartItems as $cartItem) {
                    $product = Product::where('id', $cartItem->product_id)->lockForUpdate()->first();

                    if ($product->stock < $cartItem->quantity) {
                        throw new \Exception('Insufficient stock for product: ' . $product->name);
                    }

                    $total += $product->price * $cartItem->quantity;

                    $product->stock -= $cartItem->quantity;
                    $product->save();
                }

                $order = Order::create([
                    'user_id' => $user->id,
                    'status'  => 'pending',
                    'total'   => $total,
                ]);

                foreach ($cartItems as $cartItem) {
                    OrderItem::create([
                        'order_id'   => $order->id,
                        'product_id' => $cartItem->product_id,
                        'quantity'   => $cartItem->quantity,
                        'price'      => $cartItem->product->price,
                    ]);
                }

                $cartItems->each->delete();
            });

            return response()->json($order, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    // Show a specific order
    public function show(Order $order)
    {
        if ($order->user_id !== Auth::id()) {     
            return response()->json(['message' => 'Unauthorized'], 403); // Ensure user owns the order
        }

        $order->load('products'); // Eager load products
        return response()->json($order); // Return order with products
    }
}
