import { Component } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-add',
  templateUrl: './budget-add.component.html',
  styleUrls: ['./budget-add.component.css'],
})
export class BudgetAddComponent {
  budget = { title: '', amount: 0, category: '' };

  constructor(private budgetService: BudgetService, private router: Router) {}

  updateAmount(): void {
    if (this.budget.category === 'Expense') {
      if (this.budget.amount > 0) {
        this.budget.amount = -this.budget.amount;
      }
    } else {
      if (this.budget.amount < 0) {
        this.budget.amount = -this.budget.amount;
      }
    }
  }

  addBudget(): void {
    this.updateAmount();
    this.budgetService.addBudget(this.budget).subscribe(() => {
      this.router.navigate(['/budget']);
    });
  }
}
