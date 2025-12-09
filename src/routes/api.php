<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TaskController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;

// ---------- AUTH API (for React) ----------
// Still available, but no middleware around them
Route::post('/register', [UserController::class, 'apiRegister']);
Route::post('/login',    [UserController::class, 'apiLogin']);
Route::post('/logout',   [UserController::class, 'apiLogout']);

// Optional: return current user if you send a token, but no guard enforced
Route::get('/user', function (Request $request) {
    return $request->user();
});

// ---------- PRODUCTS (ALL PUBLIC) ----------
Route::apiResource('products', ProductController::class);

// ---------- TASKS (ALL PUBLIC) ----------
Route::apiResource('task', TaskController::class);

// ---------- CART (ALL PUBLIC) ----------
Route::prefix('cart')->group(function () {
    Route::get('/',                    [CartController::class, 'index']);
    Route::post('/',                   [CartController::class, 'store']);
    Route::put('/items/{cartItem}',    [CartController::class, 'update']);
    Route::delete('/items/{cartItem}', [CartController::class, 'destroy']);
    Route::delete('/clear',            [CartController::class, 'clear']);
});

// ---------- ORDERS (ALL PUBLIC) ----------
Route::get('/orders',         [OrderController::class, 'index']);
Route::post('/orders',        [OrderController::class, 'store']);
Route::get('/orders/{order}', [OrderController::class, 'show']);
