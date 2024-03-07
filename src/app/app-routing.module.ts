import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'rickymorty',
    loadChildren: () => import('./rm/rm.module').then( m => m.RmModule )
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'rickymorty'
  },
  {
    path:'**',
    redirectTo: 'rickymorty'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
