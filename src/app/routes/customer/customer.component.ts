import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  public customer: any = {
    customerId: '',
    name: '',
    city: '',
    contact: ''
  };

  constructor(private http: HttpClient) {}

  public manageCustomer() {
    this.http.post('http://localhost:8080/api/customers', this.customer).subscribe({
      next: (data) => {
        console.log('Customer added successfully:', data);
        this.resetForm();
      },
      error: (err) => {
        console.error('Error adding customer:', err);
      }
    });
  }

  public updateCustomer() {
    const id = this.customer.customerId;
    this.http.put(`http://localhost:8080/api/customers/${id}`, this.customer).subscribe({
      next: (data) => {
        console.log('Customer updated successfully:', data);
        this.resetForm();
      },
      error: (err) => {
        console.error('Error updating customer:', err);
      }
    });
  }

  public deleteCustomer() {
    const id = this.customer.customerId;
    this.http.delete(`http://localhost:8080/api/customers/${id}`).subscribe({
      next: () => {
        console.log('Customer deleted successfully');
        this.resetForm();
      },
      error: (err) => {
        console.error('Error deleting customer:', err);
      }
    });
  }

  public searchCustomer() {
    const id = this.customer.customerId;
    this.http.get(`http://localhost:8080/api/customers/${id}`).subscribe({
      next: (data: any) => {
        console.log('Customer found:', data);
        this.customer = data; 
      },
      error: (err) => {
        console.error('Error finding customer:', err);
      }
    });
  }

  private resetForm() {
    this.customer = {
      customerId: '',
      name: '',
      city: '',
      contact: ''
    };
  }
}
