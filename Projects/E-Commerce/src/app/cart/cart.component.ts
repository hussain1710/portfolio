import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; 

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  }

  increaseQuantity(item: any): void {
    item.quantity = (item.quantity || 1) + 1;
    this.updateCart();
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(item);
    }
    this.updateCart();
  }

  removeItem(item: any): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
    this.updateCart();
  }

  updateCart(): void {
    this.cartService.updateCart(this.cartItems);
  }

  continueShopping(): void {
    this.router.navigate(['/products']); // Redirect to the products page
  }
}
