import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Jos's robot shope" },
  {
    path: 'catalog/:filter',
    component: CatalogComponent,
    title: "Catalog - Jos's robot shope",
  },
  { path: 'cart', component: CartComponent, title: "Cart - Jos's robot shope" },
  {
    path: 'sign-in',
    component: SignInComponent,
    title: "Sign in - Jos's robot shope",
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
