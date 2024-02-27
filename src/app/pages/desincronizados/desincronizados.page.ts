import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-desincronizados',
  templateUrl: './desincronizados.page.html',
  styleUrls: ['./desincronizados.page.scss'],
})
export class DesincronizadosPage implements OnInit {

  estadoSync: boolean = true;
  estadoActivo: boolean = true;

  constructor(private controlToast: ToastController) { }

  ngOnInit() {
  }

  alternarSync(){
    this.estadoSync = !this.estadoSync;
    if(!this.estadoSync){
      this.noSync();
    } else{
      this.Sync();
    }
  }

  eliminarDispositivo(){
    this.estadoActivo = !this.estadoActivo;
    if(!this.estadoActivo){
      this.Eliminar();
    }
  }

  async Sync() {
    const toast = await this.controlToast.create({
      message: 'Dispositivo sincronizado',
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

  async noSync() {
    const toast = await this.controlToast.create({
      message: 'Dispositivo desincronizado',
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
