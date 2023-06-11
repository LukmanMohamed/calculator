import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equation } from '../models/equation.model';

const baseUrl = 'http://localhost:8080/api/equations';

@Injectable({
  providedIn: 'root'
})
export class EquationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Equation[]> {
    return this.http.get<Equation[]>(baseUrl);
  }

  get(id: any): Observable<Equation> {
    return this.http.get<Equation>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByExpression(expression: string): Observable<Equation[]> {
    return this.http.get<Equation[]>(`${baseUrl}?expression=${expression}`);
  }
}
