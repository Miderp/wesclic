<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CustomerController;

// Public routes (No authentication required)
Route::prefix('v1')->group(function () {
    // Auth routes
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
});

// Protected routes (JWT authentication required)
Route::prefix('v1')->middleware('auth:api')->group(function () {
    // Auth routes
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::get('me', [AuthController::class, 'me']);
    
    // Product routes
    Route::post('products', [ProductController::class, 'store']);
    Route::get('products', [ProductController::class, 'index']);
    Route::get('products/transactions', [ProductController::class, 'getTransactions']);
    Route::get('products/search', [ProductController::class, 'search']);
    Route::get('products/{id}', [ProductController::class, 'show']);
    Route::put('products/{id}', [ProductController::class, 'update']);
    Route::put('products/{id}/stock', [ProductController::class, 'updateStock']);
    Route::delete('products/{id}', [ProductController::class, 'destroy']);
    Route::delete('products/out-of-stock', [ProductController::class, 'deleteOutOfStock']);
    
    // Customer routes
    Route::apiResource('customers', CustomerController::class);
});