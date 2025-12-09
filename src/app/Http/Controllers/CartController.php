<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    // Get current user's cart
    public function index()
    {
        $user = Auth::user();
        $items = CartItem::with('product')
            ->where('user_id', $user->id)
            ->get();

        return response()->json($items);
    }

    // Add product to cart or increase quantity
    public function store(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity'   => 'nullable|integer|min:1',
        ]);

        $quantity = $validated['quantity'] ?? 1;

        try {
            DB::transaction(function () use ($user, $validated, $quantity) {
                $product = Product::where('id', $validated['product_id'])->lockForUpdate()->first();

                if (!$product || $product->stock < $quantity) {
                    throw new \Exception('Insufficient stock for product: ' . $product->name);
                }

                $item = CartItem::where('user_id', $user->id)
                    ->where('product_id', $validated['product_id'])
                    ->first();

                if ($item) {
                    if ($item->quantity + $quantity > $product->stock) {
                        throw new \Exception('Adding this quantity exceeds stock for product: ' . $product->name);
                    }
                    $item->quantity += $quantity;
                    $item->save();
                } else {
                    CartItem::create([
                        'user_id'    => $user->id,
                        'product_id' => $validated['product_id'],
                        'quantity'   => $quantity,
                    ]);
                }
            });

            return response()->json($item, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    // Update quantity of a cart item
    public function update(Request $request, CartItem $cartItem)
    {
        $this->authorize('update', $cartItem);

        $validated = $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        try {
            DB::transaction(function () use ($cartItem, $validated) {
                $product = Product::where('id', $cartItem->product_id)->lockForUpdate()->first();

                if ($product->stock < $validated['quantity']) {
                    throw new \Exception('Insufficient stock for product: ' . $product->name);
                }

                $cartItem->update([
                    'quantity' => $validated['quantity'],
                ]);
            });

            return response()->json($cartItem);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    // Remove product from cart
    public function destroy(CartItem $cartItem)
    {
        $this->authorize('delete', $cartItem);
        $cartItem->delete();
        return response()->json(['message' => 'Item removed from cart']);
    }

    // Clear entire cart for current user
    public function clear()
    {
        $user = Auth::user();
        CartItem::where('user_id', $user->id)->delete();
        return response()->json(['message' => 'Cart cleared']);
    }
}
