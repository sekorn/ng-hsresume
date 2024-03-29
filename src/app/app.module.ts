import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {routing} from "./app.routing";
import {HeaderComponent} from "./header/header.component";
import {DropdownDirective} from "./shared/dropdown.directive";
import {MainContentComponent} from "./main-content/main-content.component";
import {DataService} from "./shared/services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DropdownDirective,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
