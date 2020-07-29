import { Provider } from '@angular/core';

export interface Product {
    readonly id: number;
    readonly name: string;
    readonly price: number;
}

export interface Cart {
    orderItems: Array<OrderItem>;
}

export interface OrderItem extends Product {
    quantity: number;
}