import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  form: FormGroup;
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res.data;
    });
  }



  private initForm(): void {
    this.form = this.fb.group({ // TODO: Add validations
      id: ['', Validators.pattern('[0-9]*')],
      name: ['',Validators.pattern('[a-zA-Z]*')],
      email: ['',Validators.email],
      image: ['', Validators.required]
    });
  }

  addEmployee(): void {
    // TODO: Add an employee to the table
    const newEmployee: Employee = {
      id: this.form.get('id').value,
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      image: this.form.get('image').value
    };

    if (this.form.get('id').value !== "" && this.form.get('name').value !== "" &&
        this.form.get('email').value !== "" && this.form.get('image').value !== "")
      {
      this.employees.push(newEmployee);
      this.initForm();
    }
 
  }


  deleteEmployee(employee): void {
    // TODO: Delete an employee from the table
    let index: number = this.employees.findIndex(d => d === employee);
    this.employees.splice(index,1)
  }
}

