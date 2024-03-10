import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmRoutingModule } from './rm-routing.module';
import { NavComponent } from './pages/nav/nav.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ListComponent } from './pages/list/list.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

import { HttpClientModule } from "@angular/common/http";
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { RouterModule } from '@angular/router';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ListComponent,
    ContactPageComponent,
    CharacterPageComponent
  ],
  imports: [
    CommonModule,
    RmRoutingModule,
    HttpClientModule,
    RouterModule,
    ClipboardModule,
    MatSnackBarModule
  ]
})
export class RmModule { }
