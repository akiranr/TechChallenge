import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ApiService } from "../../services/api.service";
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService,
              public storeService: StoreService) { }

  ngOnInit() {
    this.apiService.getAllProducts()
    .subscribe(result => this.storeService.products = result);
  }

  addToCart(productId: number): void {
    this.storeService.addToCart(productId);
  }
}
