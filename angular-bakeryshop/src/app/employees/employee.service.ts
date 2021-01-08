import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

  employees: Employee[] = [];

  constructor(private http:HttpClient) {}

  getEmployees(): Observable<any> {
    // TODO: Load data from backend service
    return this.http.get('https://reqres.in/api/users');
    }
}

