<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class BudgetSeeder extends Seeder
{
    public function run()
    {
        DB::table('budgets')->insert([
            [
                'title' => 'Salary',
                'amount' => 5000,
                'category' => 'Income',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Groceries',
                'amount' => -200,
                'category' => 'Expense',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Utilities',
                'amount' => -150,
                'category' => 'Expense',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
