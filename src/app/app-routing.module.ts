import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './login/profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
