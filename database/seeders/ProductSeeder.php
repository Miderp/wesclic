<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        // Clear existing data
        DB::table('products')->truncate();

        $products = [
            // Electronics
            [
                'name' => 'Laptop Pro 15"',
                'category' => 'Electronics',
                'price' => 1299.00,
                'stock' => 45,
                'description' => 'High-performance laptop with 16GB RAM and 512GB SSD',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Wireless Mouse',
                'category' => 'Electronics',
                'price' => 29.99,
                'stock' => 150,
                'description' => 'Ergonomic wireless mouse with USB receiver',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Mechanical Keyboard',
                'category' => 'Electronics',
                'price' => 89.99,
                'stock' => 75,
                'description' => 'RGB mechanical keyboard with blue switches',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'USB-C Hub',
                'category' => 'Electronics',
                'price' => 49.99,
                'stock' => 200,
                'description' => '7-in-1 USB-C hub with HDMI and USB 3.0 ports',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Webcam HD',
                'category' => 'Electronics',
                'price' => 79.99,
                'stock' => 0,
                'description' => '1080p HD webcam with built-in microphone',
                'status' => 'Inactive',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Furniture
            [
                'name' => 'Office Chair Ergonomic',
                'category' => 'Furniture',
                'price' => 199.99,
                'stock' => 23,
                'description' => 'Adjustable ergonomic office chair with lumbar support',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Standing Desk',
                'category' => 'Furniture',
                'price' => 349.99,
                'stock' => 15,
                'description' => 'Electric height-adjustable standing desk',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Desk Lamp LED',
                'category' => 'Furniture',
                'price' => 49.99,
                'stock' => 0,
                'description' => 'Adjustable LED desk lamp with touch control',
                'status' => 'Inactive',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Monitor Stand',
                'category' => 'Furniture',
                'price' => 39.99,
                'stock' => 88,
                'description' => 'Wooden monitor stand with storage drawer',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Stationery
            [
                'name' => 'Notebook Set',
                'category' => 'Stationery',
                'price' => 15.99,
                'stock' => 200,
                'description' => 'Set of 3 premium notebooks with ruled pages',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pen Collection',
                'category' => 'Stationery',
                'price' => 12.99,
                'stock' => 300,
                'description' => 'Assorted gel pens in 10 colors',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sticky Notes Pack',
                'category' => 'Stationery',
                'price' => 8.99,
                'stock' => 450,
                'description' => 'Colorful sticky notes in various sizes',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Accessories
            [
                'name' => 'Phone Stand',
                'category' => 'Accessories',
                'price' => 19.99,
                'stock' => 120,
                'description' => 'Adjustable aluminum phone stand',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Cable Organizer',
                'category' => 'Accessories',
                'price' => 14.99,
                'stock' => 180,
                'description' => 'Cable management box with 5 compartments',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Laptop Sleeve',
                'category' => 'Accessories',
                'price' => 24.99,
                'stock' => 95,
                'description' => 'Water-resistant 15" laptop sleeve',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Bluetooth Speaker',
                'category' => 'Electronics',
                'price' => 59.99,
                'stock' => 65,
                'description' => 'Portable Bluetooth speaker with 10-hour battery',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Desk Organizer',
                'category' => 'Stationery',
                'price' => 22.99,
                'stock' => 140,
                'description' => 'Bamboo desk organizer with multiple compartments',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Headphone Stand',
                'category' => 'Accessories',
                'price' => 29.99,
                'stock' => 0,
                'description' => 'Premium aluminum headphone stand',
                'status' => 'Inactive',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Wireless Charger',
                'category' => 'Electronics',
                'price' => 34.99,
                'stock' => 110,
                'description' => 'Fast wireless charging pad for smartphones',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Whiteboard Small',
                'category' => 'Stationery',
                'price' => 18.99,
                'stock' => 85,
                'description' => 'Magnetic whiteboard 12x16 inches',
                'status' => 'Active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }

        $this->command->info('✅ Successfully seeded 20 products!');
    }
}