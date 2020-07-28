import { Provider } from '@angular/core';

export interface Product {
    readonly id: number;
    readonly name: string;
    readonly price: number;
}

export interface Cart {
    items: Array<OrderItem>;
}

export interface OrderItem extends Product {
    quantity: number;
}