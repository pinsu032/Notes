import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KidsComponent } from './components/kids/kids.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/details/details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { CategoriesGuard } from './guard/categories.guard';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"kids", component:KidsComponent},
  {path:"men", component:MenComponent},
  {path:"women", component:WomenComponent},
  //{path:"categories",component:CategoriesComponent , canActivate: [CategoriesGuard]},
  {path:"categories",component:CategoriesComponent},
  {path:"products/:category",component:ProductsComponent,
    children: [
      {path:"details/:id",component:DetailsComponent}
    ]
  },
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"product",component:ProductComponent},
  {path:"errorpage",component:ErrorpageComponent},
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
