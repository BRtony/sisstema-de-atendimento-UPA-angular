import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UPARoutes } from './sistema-upa';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'atendimento/listar',
    pathMatch: 'full',
  },
  ...UPARoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
