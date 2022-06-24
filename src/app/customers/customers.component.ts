import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../services/customer.service";
import {Observable} from "rxjs";
import {Customer} from "../Model/customer.model";


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
customers! : Observable<Array<Customer>>;
errorMessage! : string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  this.customers=this.customerService.getCustomers();
  }

}
