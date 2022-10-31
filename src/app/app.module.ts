import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwoWaybindingComponent } from './two-waybinding/two-waybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SqareComponent } from './sqare/sqare.component';
import { PowerComponent } from './power/power.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { CartComponent } from './cart/cart.component';
import { AmazonComponent } from './amazon/amazon.component';
import { GoogleComponent } from './google/google.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { PercentagePipe } from './percentage.pipe';
import { CarsComponent } from './cars/cars.component';
import { StarComponent } from './star/star.component';
import { ProgramComponent } from './program/program.component';
import { FooterComponent } from './footer/footer.component';
import { GpayComponent } from './gpay/gpay.component';
import { BanksComponent } from './banks/banks.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { TypicodemailComponent } from './typicodemail/typicodemail.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    InterpolationComponent,
    EventbindingComponent,
    TwoWaybindingComponent,
    RectangleComponent,
    SqareComponent,
    PowerComponent,
    EventregistrationComponent,
    EmployeeRegistrationComponent,
    CartComponent,
    AmazonComponent,
    GoogleComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    PercentagePipe,
    CarsComponent,
    StarComponent,
    ProgramComponent,
    FooterComponent,
    GpayComponent,
    BanksComponent,
    VehiclesComponent,
    TypicodeComponent,
    FlipkartComponent,
    TypicodemailComponent,
    VehicleDetailsComponent,
    BankDetailsComponent,
    CreateAccountComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
