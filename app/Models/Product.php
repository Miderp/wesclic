<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    
    protected $table = 'products';

    
    protected $fillable = [
        'name',
        'category',
        'price',
        'stock',
        'description',
        'status',
    ];

    
    protected $casts = [
        'price' => 'decimal:2',
        'stock' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    
    public function scopeActive($query)
    {
        return $query->where('status', 'Active');
    }

    
    public function scopeInactive($query)
    {
        return $query->where('status', 'Inactive');
    }

    
    public function scopeOutOfStock($query)
    {
        return $query->where('stock', 0);
    }

    
    public function scopeLowStock($query, $threshold = 10)
    {
        return $query->where('stock', '<=', $threshold)->where('stock', '>', 0);
    }

    
    public function scopeSearch($query, $search)
    {
        if (empty($search)) {
            return $query;
        }

        return $query->where(function ($q) use ($search) {
            $q->where('name', 'like', "%{$search}%")
              ->orWhere('category', 'like', "%{$search}%")
              ->orWhere('description', 'like', "%{$search}%");
        });
    }

    
    public function isOutOfStock(): bool
    {
        return $this->stock === 0;
    }

    
    public function isLowStock($threshold = 10): bool
    {
        return $this->stock <= $threshold && $this->stock > 0;
    }

    
    public function isActive(): bool
    {
        return $this->status === 'Active';
    }

    
    public function decreaseStock(int $quantity): bool
    {
        if ($this->stock < $quantity) {
            return false;
        }

        $this->stock -= $quantity;
        return $this->save();
    }

    
    public function increaseStock(int $quantity): bool
    {
        $this->stock += $quantity;
        return $this->save();
    }
}