import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  shippingCost: number = 0;

  constructor(private apiService: ApiService,
              public storeService: StoreService) { }

  ngOnInit(): void {

  }

  placeOrder() : void {
    let a = 10;
  }
}
