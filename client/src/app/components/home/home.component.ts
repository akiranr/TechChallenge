import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { EshopService } from "../../services/eshop.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  Products: Array<Product> = [];

  constructor(private eshopService: EshopService) { }

  ngOnInit() {
    this.eshopService.getAllProducts()
    .subscribe(result => this.Products = result);
  }
}
