<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CustomerController extends Controller
{
        public function index(Request $request): JsonResponse
    {
        $query = Customer::query();

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('company', 'like', "%{$search}%");
            });
        }

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

              $sortBy = $request->get('sort_by', 'created_at');
        $sortOrder = $request->get('sort_order', 'desc');
        $query->orderBy($sortBy, $sortOrder);

        
        $perPage = $request->get('per_page', 8);
        $customers = $query->paginate($perPage);

                $stats = [
            'total_customers' => Customer::count(),
            'active_members' => Customer::where('status', 'active')->count(),
            'inactive_members' => Customer::where('status', 'inactive')->count(),
            'growth_rate' => $this->calculateGrowthRate(),
        ];

        return response()->json([
            'customers' => $customers,
            'stats' => $stats
        ]);
    }

        public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:customers,email',
            'phone' => 'required|string|max:20',
            'company' => 'required|string|max:255',
            'country' => 'required|string|max:100',
            'status' => 'required|in:active,inactive',
        ]);

        $customer = Customer::create($validated);

        return response()->json([
            'message' => 'Customer created successfully',
            'customer' => $customer
        ], 201);
    }

        public function show(Customer $customer): JsonResponse
    {
        return response()->json($customer);
    }

        public function update(Request $request, Customer $customer): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:customers,email,' . $customer->id,
            'phone' => 'sometimes|string|max:20',
            'company' => 'sometimes|string|max:255',
            'country' => 'sometimes|string|max:100',
            'status' => 'sometimes|in:active,inactive',
        ]);

        $customer->update($validated);

        return response()->json([
            'message' => 'Customer updated successfully',
            'customer' => $customer
        ]);
    }

        public function destroy(Customer $customer): JsonResponse
    {
        $customer->delete();

        return response()->json([
            'message' => 'Customer deleted successfully'
        ]);
    }

        public function bulkDestroy(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'exists:customers,id'
        ]);

        Customer::whereIn('id', $validated['ids'])->delete();

        return response()->json([
            'message' => 'Customers deleted successfully'
        ]);
    }

        private function calculateGrowthRate(): float
    {
        $currentMonth = Customer::whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->count();
        
        $lastMonth = Customer::whereMonth('created_at', now()->subMonth()->month)
            ->whereYear('created_at', now()->subMonth()->year)
            ->count();

        if ($lastMonth == 0) return 0;
        
        return round((($currentMonth - $lastMonth) / $lastMonth) * 100, 2);
    }
}
