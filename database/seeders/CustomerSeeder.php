<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Customer;
use Illuminate\Support\Facades\DB;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing data
        DB::table('customers')->truncate();

        $customers = [
            [
                'name' => 'Jane Cooper',
                'email' => 'jane@microsoft.com',
                'phone' => '(225) 555-0118',
                'company' => 'Microsoft',
                'country' => 'United States',
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Floyd Miles',
                'email' => 'floyd@yahoo.com',
                'phone' => '(205) 555-0100',
                'company' => 'Yahoo',
                'country' => 'Kiribati',
                'status' => 'inactive',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Ronald Richards',
                'email' => 'ronald@adobe.com',
                'phone' => '(302) 555-0107',
                'company' => 'Adobe',
                'country' => 'Israel',
                'status' => 'inactive',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Marvin McKinney',
                'email' => 'marvin@tesla.com',
                'phone' => '(252) 555-0126',
                'company' => 'Tesla',
                'country' => 'Iran',
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jerome Bell',
                'email' => 'jerome@google.com',
                'phone' => '(629) 555-0129',
                'company' => 'Google',
                'country' => 'Réunion',
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kathryn Murphy',
                'email' => 'kathryn@microsoft.com',
                'phone' => '(406) 555-0120',
                'company' => 'Microsoft',
                'country' => 'Curaçao',
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jacob Jones',
                'email' => 'jacob@yahoo.com',
                'phone' => '(208) 555-0112',
                'company' => 'Yahoo',
                'country' => 'Brazil',
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kristin Watson',
                'email' => 'kristin@facebook.com',
                'phone' => '(704) 555-0127',
                'company' => 'Facebook',
                'country' => 'Åland Islands',
                'status' => 'inactive',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'John Doe',
                'email' => 'john@apple.com',
                'phone' => '(555) 123-4567',
                'company' => 'Apple',
                'country' => 'United States',
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sarah Wilson',
                'email' => 'sarah@amazon.com',
                'phone' => '(555) 987-6543',
                'company' => 'Amazon',
                'country' => 'United States',
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Michael Brown',
                'email' => 'michael@netflix.com',
                'phone' => '(555) 246-8135',
                'company' => 'Netflix',
                'country' => 'Canada',
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Emily Davis',
                'email' => 'emily@spotify.com',
                'phone' => '(555) 369-2580',
                'company' => 'Spotify',
                'country' => 'Sweden',
                'status' => 'inactive',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'David Martinez',
                'email' => 'david@ibm.com',
                'phone' => '(555) 147-2589',
                'company' => 'IBM',
                'country' => 'United Kingdom',
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Lisa Anderson',
                'email' => 'lisa@oracle.com',
                'phone' => '(555) 258-3691',
                'company' => 'Oracle',
                'country' => 'Germany',
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Robert Taylor',
                'email' => 'robert@salesforce.com',
                'phone' => '(555) 789-4561',
                'company' => 'Salesforce',
                'country' => 'Australia',
                'status' => 'inactive',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($customers as $customer) {
            Customer::create($customer);
        }

        $this->command->info('✅ Successfully seeded 15 customers!');
    }
}