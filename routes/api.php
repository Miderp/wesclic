<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    
    
    Route::post('products', [ProductController::class, 'store']);
    

    Route::get('products/transactions', [ProductController::class, 'getTransactions']);
    
    Route::put('products/{id}/stock', [ProductController::class, 'updateStock']);
    
    Route::delete('products/out-of-stock', [ProductController::class, 'deleteOutOfStock']);
    
    Route::get('products/search', [ProductController::class, 'search']);
    
    Route::get('products', [ProductController::class, 'index']);
    Route::get('products/{id}', [ProductController::class, 'show']);
    Route::put('products/{id}', [ProductController::class, 'update']);
    Route::delete('products/{id}', [ProductController::class, 'destroy']);
    
});
