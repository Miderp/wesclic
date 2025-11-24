<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create test user
        User::create([
            'name' => 'Evano',
            'email' => 'admin@dashboard.com',
            'password' => Hash::make('password123'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        User::create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->command->info('✅ Successfully seeded 2 users!');
        $this->command->info('📧 Email: admin@dashboard.com | Password: password123');
        $this->command->info('📧 Email: test@example.com | Password: password');
    }
}