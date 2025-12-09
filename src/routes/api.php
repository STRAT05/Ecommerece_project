<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TaskController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;

// Default route to get the authenticated user
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Public routes: listing and showing products
Route::apiResource('products', ProductController::class)->only(['index', 'show']);

// Protected routes: require authentication
Route::middleware('auth:sanctum')->group(function () {
    // Full products management (create, update, delete)
    Route::apiResource('products', ProductController::class)->except(['index', 'show']);

    // Tasks API
    Route::apiResource('task', TaskController::class);

    // Cart routes
    Route::prefix('cart')->group(function () {
        Route::get('/', [CartController::class, 'index']); // Get current user's cart
        Route::post('/', [CartController::class, 'store']); // Add item to cart / increase quantity
        Route::put('/items/{cartItem}', [CartController::class, 'update']); // Update quantity
        Route::delete('/items/{cartItem}', [CartController::class, 'destroy']); // Remove single item
        Route::delete('/clear', [CartController::class, 'clear']); // Clear entire cart
    });
});
