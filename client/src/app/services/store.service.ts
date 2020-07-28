import { Injectable } from '@angular/core';
import { Product, Cart } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public products: Array<Product>;

  public get totalCheckoutItems() : number {
    return this.cart.items
    .map(item => item.quantity)
    .reduce((prev, next) => prev + next, 0)
  }

  public get totalOrderPrice() : number {
    return this.cart.items
    .map(item => item.quantity * item.price)
    .reduce((prev, next) => prev + next, 0)
  }

  public cart : Cart = {
    items: []
  }

  constructor() { }

  addToCart(productId: number): void {
    const orderItem = this.cart.items.find(i => i.id == productId);

    if (orderItem) {
      orderItem.quantity++;
    } else {
      this.cart.items.push(Object.assign({ quantity: 1 }, this.products.find(p => p.id == productId)));
    }
  }

  removeFromCart(productId: number): void {
    this.cart.items = this.cart.items.filter(c => c.id !== productId);
  }
}
