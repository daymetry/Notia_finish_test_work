import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {InfoComponent} from './components/info/info.component';
import {OrderComponent} from './components/order/order.component';
import {Base_look} from './components/base_look/base_look.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// import { MomentModule } from 'angular2-moment';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    InfoComponent,
    Base_look,


  ],
  imports: [
    // MomentModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {

}
