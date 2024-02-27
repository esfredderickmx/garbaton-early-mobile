import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinculacionPageRoutingModule } from './vinculacion-routing.module';

import { VinculacionPage } from './vinculacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinculacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VinculacionPage]
})
export class VinculacionPageModule {}
