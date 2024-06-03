import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  loading = true;
  budgets: any[] = [];
  newBudget: any = { title: '', amount: 0, category: 'Expense' };
  editBudgetData: any = { id: '', title: '', amount: 0, category: 'Expense' };

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.getBudgets().subscribe((budgets) => {
      this.budgets = budgets;
      this.loading = false;
    });
  }

  updateAmount(): void {
    if (this.newBudget.category === 'Expense') {
      this.newBudget.amount = Math.abs(this.newBudget.amount) * -1;
    } else {
      this.newBudget.amount = Math.abs(this.newBudget.amount);
    }
  }

  updateEditAmount(): void {
    if (this.editBudgetData.category === 'Expense') {
      this.editBudgetData.amount = Math.abs(this.editBudgetData.amount) * -1;
    } else {
      this.editBudgetData.amount = Math.abs(this.editBudgetData.amount);
    }
  }

  addBudget(): void {
    this.updateAmount();
    this.budgetService.addBudget(this.newBudget).subscribe((budget) => {
      this.budgets.push(budget);
      this.newBudget = { title: '', amount: 0, category: 'Expense' };
    });
  }

  deleteBudget(id: number): void {
    this.budgetService.deleteBudget(id).subscribe(() => {
      this.budgets = this.budgets.filter((budget) => budget.id !== id);
    });
  }

  loadEditBudget(budget: any): void {
    this.editBudgetData = { ...budget };
  }

  editBudget(): void {
    this.updateEditAmount();
    this.budgetService
      .updateBudget(this.editBudgetData.id, this.editBudgetData)
      .subscribe((updatedBudget) => {
        const index = this.budgets.findIndex(
          (budget) => budget.id === updatedBudget.id
        );
        if (index !== -1) {
          this.budgets[index] = updatedBudget;
        }
        this.editBudgetData = {
          id: '',
          title: '',
          amount: 0,
          category: 'Expense',
        };
      });
  }

  getIconClass(category: string): string {
    switch (category) {
      case 'Expense':
        return 'fas fa-money-bill-wave icon-expense';
      case 'Income':
        return 'fas fa-wallet icon-income';
      default:
        return 'fas fa-question-circle';
    }
  }
}
