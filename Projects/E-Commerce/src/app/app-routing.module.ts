import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user', component: UserComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', redirectTo: '' } // Redirect to home for any undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
