import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {}

  abrirMenu(){
    this.menu.enable(true, 'menu-principal'); //Habilita el menú
    this.menu.open('menu-principal'); //Abre el menú
  }

}
