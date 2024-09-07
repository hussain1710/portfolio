import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; 
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  constructor() {
    this.loadCart();
  }

  addToCart(product: Product) {
    let existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
    this.saveCart();
  }

  getCart() {
    return this.cart;
  }

  updateCart(cart: Product[]) {
    this.cart = cart;
    this.saveCart();
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }
}
