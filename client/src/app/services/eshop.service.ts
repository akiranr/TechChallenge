import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EshopService {
  private apiUrl = 'http://ec2-3-25-169-120.ap-southeast-2.compute.amazonaws.com/api/products';
  products: Array<Product> = [
    {
      id: 1,
      name: "P1",
      price: 100
    },
    {
      id: 1,
      name: "P2",
      price: 100
    },
    {
      id: 1,
      name: "P3",
      price: 100
    },
    {
      id: 1,
      name: "P4",
      price: 100
    },
    {
      id: 1,
      name: "P5",
      price: 100
    },
    {
      id: 1,
      name: "P6",
      price: 100
    },
    {
      id: 1,
      name: "P7",
      price: 100
    },
    {
      id: 1,
      name: "P8",
      price: 100
    },
    {
      id: 1,
      name: "P9",
      price: 100
    },
  ];


  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<Product>> {
    return of(this.products);
    // return this.http.get<Array<Product>>(this.apiUrl)
  }
}
