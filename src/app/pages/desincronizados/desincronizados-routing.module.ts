import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesincronizadosPage } from './desincronizados.page';

const routes: Routes = [
  {
    path: '',
    component: DesincronizadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesincronizadosPageRoutingModule {}
