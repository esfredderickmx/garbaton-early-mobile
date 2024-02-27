import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcultosPageRoutingModule } from './ocultos-routing.module';

import { OcultosPage } from './ocultos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcultosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OcultosPage]
})
export class OcultosPageModule {}
