import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  totalIncome = 0;
  totalOutcome = 0;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.getBudgets().subscribe((budgets) => {
      this.totalIncome = budgets
        .filter((b: any) => b.amount > 0)
        .reduce((sum: number, b: any) => sum + b.amount, 0);
      this.totalOutcome = budgets
        .filter((b: any) => b.amount < 0)
        .reduce((sum: number, b: any) => sum + b.amount, 0);
    });
  }
}
