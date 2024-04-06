import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { NavComponent } from './pages/nav/nav.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';

const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children: [
      { path: 'characters', component: ListComponent },
      { path: 'locations', component: LocationsComponent },
      {path:'contact', component: ContactPageComponent},
      { path:'character/:id', component: CharacterPageComponent },
      { path:'location/:id', component: LocationPageComponent },
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
