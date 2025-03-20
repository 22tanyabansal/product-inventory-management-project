import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inventory', pathMatch: 'full' },
  { path: 'inventory', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
//   { path: 'auth/sign-in', component: LoginComponent },
//   { path: 'auth/register', component: RegisterComponent },
  { 
    path: 'inventory/home', 
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
//   {
//     path: 'inventory/product-detail/:id',
//     component: ProductDetailsComponent,
//     canActivate: [AuthGuard]
//   },
  {
    path: 'inventory/update-product/:id',
    component: EditProductComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'inventory/add-product',
    component: AddProductComponent,
    // canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/inventory' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
