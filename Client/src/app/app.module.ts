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
      path: 'checkout', component: CheckoutComponent
    },
    {
      path: 'printpage', component: PrintpageComponent
    },
    {
      path: 'myprescriptions', component: MyprescriptionsComponent
    },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'admin/dashboard', component: AdminDashboardComponent
    },
    {
      path: 'admin/products' , component: AdminProductsComponent
    },
    {
      path: 'admin/transactions' , component: AdminTransactionsComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
