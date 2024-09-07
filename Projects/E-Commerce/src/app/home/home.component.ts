import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


interface Product {
  title: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [
    {
      title: 'Strawberry',
      description: 'Our top-selling Strawberry this season! Sweet and fragrant strawberries, ideal for desserts, smoothies, and snacking.',
      price: 500,
      image: '../../assets/fruit3.jpg'
    },
    {
      title: 'Mango',
      description: 'Our top-selling Mango! Tropical and luscious mangoes, perfect for smoothies, salsas, and fresh eating.',
      price: 500,
      image: '../../assets/fruit4.jpg'
    },
    {
      title: 'Avocado',
      description: 'Our top-selling Avocado! Rich and creamy avocados, perfect for salads, sandwiches, and guacamole. A superfood staple.',
      price: 500,
      image: '../../assets/veg1.jpg'
    },
    {
      title: 'Tomato',
      description: 'Our top-selling Tomato! Juicy and flavorful tomatoes, perfect for salads, sauces, and sandwiches. A kitchen essential.',
      price: 500,
      image: '../../assets/veg4.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  addToCart(product: Product): void {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingCartItem = cart.find((item: Product) => item.title === product.title);
    if (existingCartItem) {
      existingCartItem.quantity = (existingCartItem.quantity || 0) + 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
