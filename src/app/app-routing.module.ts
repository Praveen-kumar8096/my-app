import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './amazon/amazon.component';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BanksComponent } from './banks/banks.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleComponent } from './google/google.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PowerComponent } from './power/power.component';
import { ProgramComponent } from './program/program.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SqareComponent } from './sqare/sqare.component';
import { StarComponent } from './star/star.component';
import { TwoWaybindingComponent } from './two-waybinding/two-waybinding.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { TypicodemailComponent } from './typicodemail/typicodemail.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[], children:[
    {path:'calculator',component:CalculatorComponent},
    {path:'interpolation',component:InterpolationComponent},
    {path:'eventbinding',component:EventbindingComponent},
    {path:'two-waybinding',component:TwoWaybindingComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'sqare',component:SqareComponent},
    {path:'power',component:PowerComponent},
    {path:'eventregistration',component:EventregistrationComponent},
    {path:'employee-registration',canDeactivate:[NotifyGuard], component:EmployeeRegistrationComponent},
    {path:'cart',component:CartComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'google',component:GoogleComponent},
    {path:'pipes',component:PipesComponent},
    {path:'cars',component:CarsComponent},
    {path:'star',component:StarComponent},
    {path:'program',component:ProgramComponent},
    {path:'footer',component:FooterComponent},
    {path:'gpay',component:GpayComponent},
    {path:'banks',component:BanksComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'typicode', component:TypicodeComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'typicodemail', component:TypicodemailComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'bank-details/:id',component:BankDetailsComponent},
    {path:'create-account', canDeactivate:[NotifyGuard], component:CreateAccountComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'create-product',component:CreateUserComponent},
    {path:'edit-account/:id', component:CreateAccountComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
