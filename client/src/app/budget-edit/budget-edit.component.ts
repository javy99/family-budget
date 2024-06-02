import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css'],
})
export class BudgetEditComponent implements OnInit {
  budget = { title: '', amount: 0, category: '' };

  constructor(
    private budgetService: BudgetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Convert to number
    this.budgetService
      .getBudget(id)
      .subscribe((budget) => (this.budget = budget));
  }

  editBudget(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Convert to number
    this.budgetService.updateBudget(id, this.budget).subscribe(() => {
      this.router.navigate(['/budget']);
    });
  }
}
