<?php

use App\Http\Controllers\BudgetController;
use Illuminate\Support\Facades\Route;

Route::apiResource('budgets', BudgetController::class);
