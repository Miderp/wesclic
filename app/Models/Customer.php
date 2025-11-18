<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'customers';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'company',
        'country',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [];

    /**
     * Scope a query to only include active customers.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    /**
     * Scope a query to only include inactive customers.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeInactive($query)
    {
        return $query->where('status', 'inactive');
    }

    /**
     * Scope a query to search customers by name, email, or company.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $search
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearch($query, $search)
    {
        if (empty($search)) {
            return $query;
        }

        return $query->where(function ($q) use ($search) {
            $q->where('name', 'like', "%{$search}%")
              ->orWhere('email', 'like', "%{$search}%")
              ->orWhere('company', 'like', "%{$search}%")
              ->orWhere('phone', 'like', "%{$search}%")
              ->orWhere('country', 'like', "%{$search}%");
        });
    }

    /**
     * Get the customer's full information as a formatted string.
     *
     * @return string
     */
    public function getFullInfoAttribute()
    {
        return "{$this->name} - {$this->company} ({$this->email})";
    }

    /**
     * Check if the customer is active.
     *
     * @return bool
     */
    public function isActive()
    {
        return $this->status === 'active';
    }

    /**
     * Check if the customer is inactive.
     *
     * @return bool
     */
    public function isInactive()
    {
        return $this->status === 'inactive';
    }

    /**
     * Toggle customer status between active and inactive.
     *
     * @return bool
     */
    public function toggleStatus()
    {
        $this->status = $this->status === 'active' ? 'inactive' : 'active';
        return $this->save();
    }
}
