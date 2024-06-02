import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css',
})
export class BudgetComponent implements OnInit {
  budgets: any[] = [];

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService
      .getBudgets()
      .subscribe((budgets) => (this.budgets = budgets));
  }
}
