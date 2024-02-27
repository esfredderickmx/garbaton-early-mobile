import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesincronizadosPageRoutingModule } from './desincronizados-routing.module';

import { DesincronizadosPage } from './desincronizados.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesincronizadosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DesincronizadosPage]
})
export class DesincronizadosPageModule {}
