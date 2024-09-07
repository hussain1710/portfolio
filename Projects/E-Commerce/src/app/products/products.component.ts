import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';  

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  vegetables = [
    { id: 1, title: 'Avocado', description: 'Rich and creamy avocados, perfect for salads, sandwiches, and guacamole.', price: 500, image: 'assets/veg1.jpg' },
    { id: 2, title: 'Potato', description: 'Versatile and nutritious, perfect for baking, frying, or mashing. Enjoy its hearty flavor in countless dishes.', price: 500, image: 'assets/veg2.jpg' },
    { id: 3, title: 'Lettuce', description: 'Fresh and crisp lettuce, ideal for adding crunch to your favorite dishes.', price: 500, image: 'assets/veg3.jpg' },
    // Add more vegetables
  ];

  fruits = [
    { id: 4, title: 'Watermelon', description: 'Juicy and refreshing watermelon, perfect for a hot summer day. Enjoy it fresh or in a fruit salad.', price: 500, image: 'assets/fruit1.jpg' },
    { id: 5, title: 'Pomegranate', description: 'Juicy and antioxidant-rich pomegranates, great for salads, juices, and healthy snacking.', price: 500, image: 'assets/fruit2.jpg' },
    { id: 6, title: 'Strawberry', description: 'Sweet and fragrant strawberries, ideal for desserts, smoothies, and snacking. Packed with vitamin C.', price: 500, image: 'assets/fruit3.jpg' },
    // Add more fruits 
  ];

  constructor(private cartService: CartService) { }  

  ngOnInit(): void {
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    
  }
}
