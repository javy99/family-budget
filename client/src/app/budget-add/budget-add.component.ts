import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-add.component.html',
  styleUrls: ['./budget-add.component.css'],
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
