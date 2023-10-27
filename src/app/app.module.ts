import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPersonajeComponent } from './pages/card-personaje/card-personaje.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './pages/nav/nav.component';
import { InfoCardComponent } from './pages/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPersonajeComponent,
    NavComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
