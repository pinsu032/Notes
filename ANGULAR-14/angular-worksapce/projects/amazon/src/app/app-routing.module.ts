import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WomenComponent } from './components/women/women.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { CategoriesGuard } from './guard/categories.guard';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"women", component:WomenComponent},
  //{path:"categories",component:CategoriesComponent , canActivate: [CategoriesGuard]},
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
