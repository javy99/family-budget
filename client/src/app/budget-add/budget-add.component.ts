import { Component } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-add',
  templateUrl: './budget-add.component.html',
  styleUrl: './budget-add.component.css',
})
export class BudgetAddComponent {
  budget = { title: '', amount: 0, category: '' };

  constructor(private budgetService: BudgetService, private router: Router) {}

  addBudget(): void {
    this.budgetService.addBudget(this.budget).subscribe(() => {
      this.router.navigate(['/budget']);
    });
  }
}
