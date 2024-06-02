import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrl: './budget-edit.component.css',
})
export class BudgetEditComponent implements OnInit {
  budget = { title: '', amount: 0, category: '' };

  constructor(
    private budgetService: BudgetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.budgetService
      .getBudget(id)
      .subscribe((budget) => (this.budget = budget));
  }

  editBudget(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.budgetService.updateBudget(id, this.budget).subscribe(() => {
      this.router.navigate(['/budget']);
    });
  }
}
