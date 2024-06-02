import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BudgetComponent } from './budget/budget.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BudgetAddComponent } from './budget-add/budget-add.component';
import { BudgetEditComponent } from './budget-edit/budget-edit.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BudgetComponent,
    MainComponent,
    NavbarComponent,
    BudgetAddComponent,
    BudgetEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
