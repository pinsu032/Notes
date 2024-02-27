import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NetflixindexComponent } from './netflix/netflixindex/netflixindex.component';
import { NetflixheaderComponent } from './netflix/netflixheader/netflixheader.component';
import { NetflixmainComponent } from './netflix/netflixmain/netflixmain.component';
import { NetflixregisterComponent } from './netflix/netflixregister/netflixregister.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { IfdemoComponent } from './components/ifdemo/ifdemo.component';
import { SwitchdemoComponent } from './components/switchdemo/switchdemo.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ForpropertydemoComponent } from './components/forpropertydemo/forpropertydemo.component';
import { StyledemoComponent } from './components/styledemo/styledemo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NetflixindexComponent,
    NetflixheaderComponent,
    NetflixmainComponent,
    NetflixregisterComponent,
    DatabindingComponent,
    TwowaybindingComponent,
    IfdemoComponent,
    SwitchdemoComponent,
    FordemoComponent,
    ShoppingcartComponent,
    ForpropertydemoComponent,
    StyledemoComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
