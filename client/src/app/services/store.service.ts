import { Injectable, ReflectiveKey } from '@angular/core';
import { Product, Cart } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public products: Array<Product>;

  public get totalCheckoutItems() : number {
    return this.cart.orderItems
    .map(item => item.quantity)
    .reduce((prev, next) => prev + next, 0)
  }

  public get totalOrderPrice() : number {
    return this.cart.orderItems
    .map(item => item.quantity * item.price)
    .reduce((prev, next) => prev + next, 0)
  }

  public get isCartEmpty(): boolean {
    return this.cart.orderItems.length === 0;
  }

  public cart : Cart = {
    orderItems: []
  }

  public lastOrderReferenceNumber: number;

  constructor() { }

  addToCart(productId: number): void {
    const orderItem = this.cart.orderItems.find(i => i.id == productId);

    if (orderItem) {
      orderItem.quantity++;
    } else {
      this.cart.orderItems.push(Object.assign({ quantity: 1 }, this.products.find(p => p.id == productId)));
    }
  }

  removeFromCart(productId: number): void {
    this.cart.orderItems = this.cart.orderItems.filter(c => c.id !== productId);
  }

  emptyCart(): void {
    this.cart.orderItems = [];
  }
}
