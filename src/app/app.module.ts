import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MeteoService } from './meteo.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { MeteoComponent } from './meteo/meteo.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResolveLocationService } from './resolve-location.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MeteoService, ResolveLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
