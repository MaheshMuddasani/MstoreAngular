import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { WorkareaComponent } from './workarea/workarea.component';
import {MaterialModule} from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsersComponent } from './workarea/admin/users/users.component';
import { AdduserComponent } from './workarea/admin/users/adduser/adduser.component';
import { ProductComponent } from './workarea/admin/product/product.component';
import { ViewuserComponent } from './workarea/admin/users/viewuser/viewuser.component';
import { ViewproductComponent } from './workarea/admin/products/viewproduct/viewproduct.component';
import { AddproductComponent } from './workarea/admin/product/addproduct/addproduct.component';
import { MenuComponent } from './workarea/admin/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ProductComponent,
    AddproductComponent,
    ViewproductComponent,
    LoginComponent,
    WorkareaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
