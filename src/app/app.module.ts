import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeteoService } from './meteo.service';
import { CurrentComponent } from './current/current.component';
import { AppRoutingModule } from './app-routing.module';
import { ResolveLocationService } from './resolve-location.service';
import { HeaderComponent } from './header/header.component';
import { MeteoComponent } from './meteo/meteo.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    HeaderComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MeteoService,
             ResolveLocationService,
             RouterOutlet],
  bootstrap: [AppComponent]
})
export class AppModule {}
