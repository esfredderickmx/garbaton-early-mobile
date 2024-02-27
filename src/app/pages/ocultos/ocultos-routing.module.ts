import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcultosPage } from './ocultos.page';

const routes: Routes = [
  {
    path: '',
    component: OcultosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcultosPageRoutingModule {}
