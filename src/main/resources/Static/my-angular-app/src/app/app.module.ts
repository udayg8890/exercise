import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';
import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule, //including into imports
    Ng2OrderModule, // importing the sorting package here
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
