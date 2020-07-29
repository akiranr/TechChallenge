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
    this.calculateShippingCost();
  }

  removeFromCart(productId: number): void {
    this.storeService.removeFromCart(productId);
    this.calculateShippingCost();
  }

  placeOrder() : void {
    this.apiService.placeOrder(this.storeService.cart)
    .subscribe((orderRefNo: number) => {
      this.storeService.lastOrderReferenceNumber = orderRefNo;
      this.storeService.emptyCart();
    })
  }

  calculateShippingCost(): void {
    if (this.storeService.isCartEmpty) {
      return;
    }

    this.apiService.calculateShippingCost(this.storeService.cart)
    .subscribe(result => {
      this.shippingCost = result;
    })
  }
}
