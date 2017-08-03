
//import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {NgPipesModule} from 'ngx-pipes';
import { SkinModule } from './skin/skin.module';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { TourComponent } from './containers/tour/tour.component';


import { DataService } from './shared/data.service';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/guard/auth.guard';
import { StripeService } from './shared/stripe/stripe.service';
import { BookComponent } from './containers/book/book.component';
import { ContactComponent } from './containers/contact/contact.component';
import { TermsComponent } from './containers/terms/terms.component';
import { PrivacyComponent } from './containers/privacy/privacy.component';
import { RefundComponent } from './containers/refund/refund.component';
import { CancelComponent } from './containers/cancel/cancel.component';
import { SuccessComponent } from './containers/success/success.component';
import { CartComponent } from './containers/cart/cart.component';
import { LoginComponent } from './containers/login/login.component';
import { UserComponent } from './containers/login/user/user/user.component';
import { TouraddComponent } from './containers/tour/touradd/touradd.component';
import { BookmoreComponent } from './containers/book/bookmore/bookmore.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TourComponent,
    BookComponent,
    ContactComponent,
    TermsComponent,
    PrivacyComponent,
    RefundComponent,
    CancelComponent,
    SuccessComponent,
    CartComponent,
    LoginComponent,
    UserComponent,
    TouraddComponent,
    BookmoreComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'Glothiatour'}),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    //ServerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, 
    AngularFireAuthModule,
    AppRoutingModule,
    NgPipesModule,
    SkinModule,
    NguiDatetimePickerModule
  ],
  providers: [DataService, AuthService, StripeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
