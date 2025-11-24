<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController    ::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('v1')->group(function () {
    
    // 1. Add new product category
    Route::post('products', [ProductController::class, 'store']);
    
    // 2. Display product purchase transaction list
    Route::get('products/transactions', [ProductController::class, 'getTransactions']);
    
    // 3. Update product stock by ID
    Route::put('products/{id}/stock', [ProductController::class, 'updateStock']);
    
    // 4. Delete all out-of-stock products
    Route::delete('products/out-of-stock', [ProductController::class, 'deleteOutOfStock']);
    
    // 5. Search products by name (query parameter)
    Route::get('products/search', [ProductController::class, 'search']);
    
    // Additional CRUD endpoints
    Route::get('products', [ProductController::class, 'index']);
    Route::get('products/{id}', [ProductController::class, 'show']);
    Route::put('products/{id}', [ProductController::class, 'update']);
    Route::delete('products/{id}', [ProductController::class, 'destroy']);
    
});

require __DIR__.'/auth.php';
