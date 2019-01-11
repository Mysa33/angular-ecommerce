import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {path :'', redirectTo : 'home', pathMatch:'full'},
  {path :'home', component: HomeComponent},
  {path :'shop', component: ProductsComponent},
  {path : 'about', component : AboutUsComponent},
  {path : 'blog', component : BlogComponent},
  {path : 'contact', component : ContactComponent},
  {path :'profil', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
