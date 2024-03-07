import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { NavComponent } from './pages/nav/nav.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';

const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children: [
      { path: 'characters', component: ListComponent },
      {path:'contact', component: ContactPageComponent},
      { path:'character/:id', component: CharacterPageComponent },
      { path: '', pathMatch:'full', redirectTo:'characters'},
      { path:'**', redirectTo:'characters' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RmRoutingModule { }
