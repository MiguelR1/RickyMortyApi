import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './rm/pages/nav/nav.component';
import { FooterComponent } from './rm/pages/footer/footer.component';
import { ListComponent } from './rm/pages/list/list.component';
import { RmModule } from './rm/rm.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
