import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public menu: MenuController) {}

  cerrarMenu(){
    this.menu.enable(false, 'menu-principal');
    this.menu.close('menu-principal')
  }
}
