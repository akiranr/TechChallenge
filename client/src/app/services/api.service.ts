import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, Cart } from '../models/product.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl = 'http://ec2-54-79-3-34.ap-southeast-2.compute.amazonaws.com/api';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.apiBaseUrl}/products`)
  }

  calculateShippingCost(cart: Cart): Observable<number> {
    return this.http.post<number>(`${this.apiBaseUrl}/calculate-shipping-cost`, cart);
  }

  placeOrder(cart: Cart): Observable<number> {
    return this.http.post<number>(`${this.apiBaseUrl}/place-order`, cart);
  }
}
