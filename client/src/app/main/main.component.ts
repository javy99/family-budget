import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
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
