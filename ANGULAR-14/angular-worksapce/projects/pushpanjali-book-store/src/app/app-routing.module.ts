
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ErrorpageComponent } from './component/errorpage/errorpage.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './contracts/Role';
import { OrderdetailsComponent } from './component/orderdetails/orderdetails.component';
import { UserComponent } from './component/user/user.component';
import { ProductComponent } from './component/product/product.component';
import { HomeSessionComponent } from './component/home-session/home-session.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full',canActivate: [AuthGuard]},
  {path:'session',component:HomeSessionComponent},
  {path:'login',component:LoginComponent},
  {path:'order',component:OrderdetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {path:'user',component:UserComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {path:'product',component:ProductComponent,
    canActivate: [AuthGuard]
  },
  {path:'errorpage',component:ErrorpageComponent},
  /* { path: 'admin', component:AdminComponent, 
    children:[
      {path:'order',component:OrderdetailsComponent},
      {path:'user',component:UserComponent}
    ],
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  }, */
  {path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
