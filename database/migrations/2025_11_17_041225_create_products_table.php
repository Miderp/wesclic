<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category', 100);
            $table->decimal('price', 10, 2)->default(0);
            $table->integer('stock')->default(0);
            $table->text('description')->nullable();
            $table->enum('status', ['Active', 'Inactive'])->default('Active');
            $table->timestamps();
            $table->softDeletes();

            // Indexes for better query performance
            $table->index('name');
            $table->index('category');
            $table->index('stock');
            $table->index('status');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
