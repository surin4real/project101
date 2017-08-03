import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { TourComponent } from './containers/tour/tour.component';
import { TouraddComponent } from './containers/tour/touradd/touradd.component';
import { BookComponent } from './containers/book/book.component';
import { BookmoreComponent } from './containers/book/bookmore/bookmore.component';
import { ContactComponent } from './containers/contact/contact.component';
import { TermsComponent } from './containers/terms/terms.component';
import { PrivacyComponent } from './containers/privacy/privacy.component';
import { RefundComponent } from './containers/refund/refund.component';
import { CancelComponent } from './containers/cancel/cancel.component';
import { SuccessComponent } from './containers/success/success.component';
import { CartComponent } from './containers/cart/cart.component';
import { LoginComponent } from './containers/login/login.component';
import { UserComponent } from './containers/login/user/user/user.component';
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'termsofuse',
    component: TermsComponent
  },
  {
    path: 'gloprivacy',
    component: PrivacyComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'booking/refund',
    component: RefundComponent
  },
  {
    path: 'booking/paid/success',
    component: SuccessComponent
  },
  {
    path: 'booking/cancelled',
    component: CancelComponent
  },
  
  {
    path: 'tour/:id/:string',
    component: TourComponent
  },
   {
    path: 'tourmore/:id/:string',
    component: TouraddComponent
  },
  {
    path: 'book/:id/:string',
    component: BookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bookmore/:id/:string',
    component: BookmoreComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id/:string',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
