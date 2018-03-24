import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductsComponent } from './component/products/products.component';
import { PrintpageComponent } from './component/printpage/printpage.component';
import { MyprescriptionsComponent } from './component/myprescriptions/myprescriptions.component';

import { AdminTransactionsComponent } from './component/admin/transactions/transactions.component';
import { AdminDashboardComponent } from './component/admin/dashboard/dashboard.component';
import { AdminProductsComponent } from './component/admin/products/products.component';

import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { UserService } from './service/user.service';
import { MedicineService } from './service/medicine.service';
import { ProductFormComponent } from './component/admin/product-form/product-form.component';
import { CategoryServiceService } from './service/category-service.service';
import { ProductService } from './service/product.service';

import { DataTableModule } from 'angular5-data-table';
import {MatTableModule} from '@angular/material/table';

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
    AdminProductsComponent,
    ProductFormComponent,
  ],
  imports: [
  BrowserModule,
  FormsModule,
  MatTableModule,
  DataTableModule,
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebase),
  NgbModule.forRoot(),
  RouterModule.forRoot([
    {
      path: '', component: ProductsComponent
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
      path: 'admin/dashboard', component: AdminDashboardComponent  , canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
      path: 'admin/products/new' , component: ProductFormComponent  , canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
      path: 'admin/products/:id' , component: ProductFormComponent  , canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
      path: 'admin/products' , component: AdminProductsComponent  , canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
      path: 'admin/transactions' , component: AdminTransactionsComponent , canActivate: [AuthGuardService, AdminAuthGuardService]
    }
  ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    MedicineService,
    CategoryServiceService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
