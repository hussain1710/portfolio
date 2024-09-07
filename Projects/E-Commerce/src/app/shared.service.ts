import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cartItems = [];
  private totalPrice = 0;
  private shippingDetails = {
    name: '',
    address: '',
    city: '',
    zip: ''
  };

  setCartItems(items: any[], total: number) {
    this.cartItems = items;
    this.totalPrice = total;
  }

  setShippingDetails(details: any) {
    this.shippingDetails = details;
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  getShippingDetails() {
    return this.shippingDetails;
  }
}
