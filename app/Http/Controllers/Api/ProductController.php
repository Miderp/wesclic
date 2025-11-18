<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        $products = Product::all();

        return response()->json([
            'success' => true,
            'message' => 'Products retrieved successfully',
            'data' => $products
        ], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'description' => 'nullable|string',
            'status' => 'required|in:Active,Inactive',
        ]);

        $product = Product::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Product created successfully',
            'data' => $product
        ], 201);
    }

    public function show($id): JsonResponse
    {
        $product = Product::findOrFail($id);

        return response()->json([
            'success' => true,
            'message' => 'Product retrieved successfully',
            'data' => $product
        ], 200);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $product = Product::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'category' => 'sometimes|required|string|max:100',
            'price' => 'sometimes|required|numeric|min:0',
            'stock' => 'sometimes|required|integer|min:0',
            'description' => 'nullable|string',
            'status' => 'sometimes|required|in:Active,Inactive',
        ]);

        $product->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Product updated successfully',
            'data' => $product
        ], 200);
    }

    public function destroy($id): JsonResponse
    {
        $product = Product::findOrFail($id);
        $productName = $product->name;
        $product->delete();

        return response()->json([
            'success' => true,
            'message' => "Product '{$productName}' deleted successfully"
        ], 200);
    }
    
    public function getTransactions(): JsonResponse
    {
        
        $products = Product::all();

        $transactions = [
            [
                'id' => 1,
                'product_id' => 1,
                'product_name' => 'Laptop Pro',
                'quantity' => 2,
                'price' => 1299,
                'total' => 2598,
                'customer_name' => 'John Doe',
                'transaction_date' => '2024-01-15 10:30:00',
                'status' => 'Completed'
            ],
            [
                'id' => 2,
                'product_id' => 2,
                'product_name' => 'Wireless Mouse',
                'quantity' => 5,
                'price' => 29,
                'total' => 145,
                'customer_name' => 'Jane Smith',
                'transaction_date' => '2024-01-15 11:45:00',
                'status' => 'Pending'
            ]
        ];

        return response()->json([
            'success' => true,
            'message' => 'Product transactions retrieved successfully',
            'data' => [
                'transactions' => $transactions,
                'total_transactions' => count($transactions),
                'total_revenue' => 2743
            ]
        ], 200);
    }

    public function updateStock(Request $request, $id): JsonResponse
    {
        $product = Product::findOrFail($id);

        $validated = $request->validate([
            'stock' => 'required|integer|min:0',
            'reason' => 'nullable|string|max:255',
        ]);

        $oldStock = $product->stock;
        $product->update(['stock' => $validated['stock']]);

        return response()->json([
            'success' => true,
            'message' => "Product stock updated from {$oldStock} to {$validated['stock']}",
            'data' => [
                'product_id' => $product->id,
                'product_name' => $product->name,
                'old_stock' => $oldStock,
                'new_stock' => $product->stock,
                'difference' => $product->stock - $oldStock,
                'reason' => $validated['reason'] ?? null,
                'updated_at' => $product->updated_at
            ]
        ], 200);
    }

    public function deleteOutOfStock(): JsonResponse
    {
        $outOfStockProducts = Product::where('stock', 0)->get();
        $count = $outOfStockProducts->count();
        
        $deletedProducts = $outOfStockProducts->pluck('name')->toArray();
        
        Product::where('stock', 0)->delete();

        return response()->json([
            'success' => true,
            'message' => "Successfully deleted {$count} out-of-stock products",
            'data' => [
                'deleted_count' => $count,
                'deleted_products' => $deletedProducts
            ]
        ], 200);
    }

    public function search(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|min:1',
        ]);

        $products = Product::where('name', 'like', '%' . $validated['name'] . '%')
            ->orWhere('category', 'like', '%' . $validated['name'] . '%')
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Search results',
            'data' => [
                'query' => $validated['name'],
                'found' => $products->count(),
                'products' => $products
            ]
        ], 200);    
    }
}