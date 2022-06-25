import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../Model/customer.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private  http:HttpClient) {

  }
  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers")
  }
  public searchCustomers(keyword:string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers/search?keyword="+keyword)
  }
}
