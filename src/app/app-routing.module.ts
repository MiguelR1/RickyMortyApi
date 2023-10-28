import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPersonajeComponent } from './pages/card-personaje/card-personaje.component';
import { InfoCardComponent } from './pages/info-card/info-card.component';

const routes: Routes = [
  {path: 'home', component:CardPersonajeComponent},
  {path:'info/:id', component: InfoCardComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
