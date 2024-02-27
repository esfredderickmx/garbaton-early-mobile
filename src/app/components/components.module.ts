import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { IonicModule } from '@ionic/angular';
import { AtrasComponent } from './atras/atras.component';
import { MenuComponent } from './menu/menu.component';
import { GraficaComponent } from './grafica/grafica.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    PieComponent,
    AtrasComponent,
    MenuComponent,
    GraficaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgxChartsModule
  ],
  exports: [
    PieComponent,
    AtrasComponent,
    MenuComponent,
    GraficaComponent
  ]
})
export class ComponentsModule { }
