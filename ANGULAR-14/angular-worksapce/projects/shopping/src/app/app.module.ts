import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';


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
import { ProductsComponent } from './components/products/products.component';
import { FilterComponent } from './components/filter/filter.component';
import { InputdemoComponent } from './components/inputdemo/inputdemo.component';
import { OutputdemoComponent } from './components/outputdemo/outputdemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialdemoComponent } from './components/materialdemo/materialdemo.component';
import { CaptchaService } from './services/captcha.service';
import { DatademoComponent } from './components/datademo/datademo.component';
import { SentencePipe } from './pipes/sentencecase.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { ReactivevalidationComponent } from './components/reactivevalidation/reactivevalidation.component';


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
    ProductsComponent,
    FilterComponent,
    InputdemoComponent,
    OutputdemoComponent,
    MaterialdemoComponent,
    DatademoComponent,
    SentencePipe,
    SortingPipe,
    PipedemoComponent,
    TemplateformComponent,
    ReactiveformComponent,
    ReactivevalidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ScrollingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CaptchaService],
  bootstrap: [ReactivevalidationComponent]
})
export class AppModule { }
