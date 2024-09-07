import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  shippingDetails = {
    name: '',
    address: '',
    city: '',
    zip: ''
  };

  constructor(private cartService: CartService, private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  }

  placeOrder(): void {
    this.sharedService.setCartItems(this.cartItems, this.totalPrice);
    this.sharedService.setShippingDetails(this.shippingDetails);
    this.router.navigate(['/payment']);
  }
  
}
