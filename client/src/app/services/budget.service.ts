import { Injectable, forwardRef, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private apiUrl = environment.apiUrl + '/budgets';
v
  constructor(private http: HttpClient) {}

  getBudgets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBudget(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addBudget(budget: any): Observable<any> {
    return this.http.post(this.apiUrl, budget);
  }

  updateBudget(id: number, budget: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, budget);
  }

  deleteBudget(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
