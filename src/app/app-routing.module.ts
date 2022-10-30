import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
  path : 'login',
  component: LoginComponent
},
{
  path:'register',
  component : RegisterComponent,
  
},
{
  path:'home',
  component:HomeComponent,
  canActivate:[AuthGuard]
},
{
path:'',
redirectTo: 'login',
pathMatch: 'full',
},
{
  path : '**',
  component: PagenotfoundComponent,
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
