import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice = 0;
  shippingDetails = {
    name: '',
    address: '',
    city: '',
    zip: ''
  };

  paymentDetails = {
    method: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    upiOption: ''
  };

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.cartItems = this.sharedService.getCartItems();
    this.totalPrice = this.sharedService.getTotalPrice();
    this.shippingDetails = this.sharedService.getShippingDetails();
    
    console.log('Cart Items:', this.cartItems);
    console.log('Total Price:', this.totalPrice);
    console.log('Shipping Details:', this.shippingDetails);
  }

  processPayment() {
    console.log('Payment Details:', this.paymentDetails);
  }
}
