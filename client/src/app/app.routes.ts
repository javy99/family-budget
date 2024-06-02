import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { BudgetComponent } from './budget/budget.component';
import { BudgetAddComponent } from './budget-add/budget-add.component';
import { BudgetEditComponent } from './budget-edit/budget-edit.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'about', component: AboutComponent },
  { path: 'budget/add', component: BudgetAddComponent },
  { path: 'budget/edit/:id', component: BudgetEditComponent },
];
