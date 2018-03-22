import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductsComponent } from './component/products/products.component';
import { PrintpageComponent } from './component/printpage/printpage.component';
import { MyprescriptionsComponent } from './component/myprescriptions/myprescriptions.component';

import { AdminTransactionsComponent } from './component/admin/transactions/transactions.component';
import { AdminDashboardComponent } from './component/admin/dashboard/dashboard.component';
import { AdminProductsComponent } from './component/admin/products/products.component';

import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CheckoutComponent,
    NavbarComponent,
    ProductsComponent,
    PrintpageComponent,
    MyprescriptionsComponent,
    AdminTransactionsComponent,
    AdminDashboardComponent,
    AdminProductsComponent
  ],
  imports: [
   BrowserModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  NgbModule.forRoot(),
  RouterModule.forRoot([
    {
      path: '', component: DashboardComponent
    },
    {
      path: 'products', component: ProductsComponent
    },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'checkout', component: CheckoutComponent  , canActivate: [AuthGuardService]
    },
    {
      path: 'printpage', component: PrintpageComponent  , canActivate: [AuthGuardService]
    },
    {
      path: 'myprescriptions', component: MyprescriptionsComponent   , canActivate: [AuthGuardService]
    },

    {
      path: 'admin/dashboard', component: AdminDashboardComponent  , canActivate: [AuthGuardService]
    },
    {
      path: 'admin/products' , component: AdminProductsComponent  , canActivate: [AuthGuardService]
    },
    {
      path: 'admin/transactions' , component: AdminTransactionsComponent , canActivate: [AuthGuardService]
    }
  ])
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
