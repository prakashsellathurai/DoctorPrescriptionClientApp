import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { UserService } from './service/user.service';
import { ProductFormComponent } from './component/admin/product-form/product-form.component';
import { CategoryServiceService } from './service/category-service.service';
import { ProductService } from './service/product.service';

import { DataTableModule } from 'angular5-data-table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { ProductCardComponent } from './component/products/product-card/product-card.component';
import { PrescriptionService } from './service/prescription.service';
import { PrescriptionComponent } from './component/prescription/prescription.component';
import { ProductListTableComponent } from './component/products/product-list-table/product-list-table.component';
import { PrescriptionEditComponent } from './component/products/prescription-edit/prescription-edit.component';
import { ExpansionPanelComponent } from './component/products/prescription-edit/expansion-panel/expansion-panel.component';
import { ProductQuantityComponent } from './component/products/product-quantity/product-quantity.component';
import { FinalEdittableComponent } from './component/checkout/final-edittable/final-edittable.component';
import { PatientDetailEditComponent } from './component/checkout/patient-detail-edit/patient-detail-edit.component';
import { FormBuilder } from '@angular/forms';
import { StepperComponent } from './component/checkout/stepper/stepper.component';
import { QrGenService } from './service/qr-gen.service';
import { NgxQRCodeModule } from 'ngx-qrcode2';


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
    ProductCardComponent,
    PrescriptionComponent,
    ProductListTableComponent,
    PrescriptionEditComponent,
    ExpansionPanelComponent,
    ProductQuantityComponent,
    FinalEdittableComponent,
    PatientDetailEditComponent,
    StepperComponent,
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  imports: [
BrowserModule,
  FormsModule,
  ReactiveFormsModule,
   MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    NgxQRCodeModule,
  DataTableModule,
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebase),
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
      path: 'prescription', component: PrescriptionComponent  , canActivate: [AuthGuardService]
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
    CategoryServiceService,
    ProductService,
    PrescriptionService,
    QrGenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
