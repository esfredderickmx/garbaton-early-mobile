import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ocultos',
  templateUrl: './ocultos.page.html',
  styleUrls: ['./ocultos.page.scss'],
})
export class OcultosPage implements OnInit {

  estadoVista: boolean = true;
  estadoActivo: boolean = true;

  constructor(private controlToast: ToastController) { }

  ngOnInit() {
  }

  alternarVista(){
    this.estadoVista = !this.estadoVista;
    if(!this.estadoVista){
      this.noVer();
    } else{
      this.Ver();
    }
  }

  eliminarDispositivo(){
    this.estadoActivo = !this.estadoActivo;
    if(!this.estadoActivo){
      this.Eliminar();
    }
  }

  async Ver() {
    const toast = await this.controlToast.create({
      message: 'Dispositivo desocultado',
      duration: 2000,
      icon: 'alert-circle',
      buttons: [
        {
          text: 'Deshacer',
          icon: 'play-back'
        }
      ]
    });
    toast.present();
  }

  async noVer() {
    const toast = await this.controlToast.create({
      message: 'Dispositivo ocultado',
      duration: 2000,
      icon: 'alert-circle',
      buttons: [
        {
          text: 'Deshacer',
          icon: 'play-back'
        }
      ]
    });
    toast.present();
  }

  async Eliminar() {
    const toast = await this.controlToast.create({
      message: 'Dispositivo eliminado',
      duration: 2000,
      icon: 'nuclear',
      buttons: [
        {
          text: 'Deshacer',
          icon: 'play-back'
        }
      ]
    });
    toast.present();
  }
}
