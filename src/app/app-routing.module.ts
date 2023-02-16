import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentComponent } from './Pages/continent/continent.component';
import { CountryComponent } from './Pages/country/country.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"continent/:id", component:ContinentComponent},
  {path:"country/:id", component:CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
