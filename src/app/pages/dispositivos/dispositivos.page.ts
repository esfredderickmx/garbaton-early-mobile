import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {
  
  dispositivos: any[];
  numeroDispositivos: number;
  descripciones: boolean;
  favoritos: boolean;

  constructor(private servicioDispositivos: DispositivosService) { }

  ngOnInit() {
    this.servicioDispositivos.obtenerDispositivos().subscribe((dispositivo: any[]) => {
      //console.log(dispositivo);
      
      this.dispositivos = dispositivo;
      this.numeroDispositivos = this.dispositivos.length;
    });
    
    if(localStorage.getItem('descripciones')){
      this.descripciones = true
    } else{
      this.descripciones = false;
    }

    if(localStorage.getItem('favoritos')){
      this.favoritos = true;
    } else{
      this.favoritos = false;
    }
  }

  alternarFavorito(dispositivo: string, estado: boolean) {
    if(this.servicioDispositivos.asignarEstado(dispositivo, estado)){
      if(estado){
        Swal.fire({
          icon: 'info',
          title: '¡Hecho!',
          text: 'Dispositivo desmarcado como favorito',
          width: "75%",
          heightAuto: true
        });
      } else{
        Swal.fire({
          icon: 'success',
          title: '¡Hecho!',
          text: 'Dispositivo marcado como favorito',
          width: "75%",
          heightAuto: true
        });
      }
    }
  }

  eliminarDispositivo(dispositivo: string) {
    Swal.fire({
      icon: 'warning',
      title: '¡Atención!',
      text: '¿Realmente deseas eliminar este dispositivo? Este cambio será permanente y no se puede deshacer',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#eb445a',
      width: "75%",
      heightAuto: true
    }).then((resultado) => {
      if(resultado.isConfirmed) {
        if(this.servicioDispositivos.removerDispositivo(dispositivo)){
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text: 'Dispositivo eliminado permanentemente',
            width: "75%",
            heightAuto: true
          });
        } else{
          Swal.fire({
            icon: 'error',
            title: '¡Oh no!',
            text: 'Error al eliminar el dispositivo',
            width: "75%",
            heightAuto: true
          });
        }
      }/*  else if(resultado.isDismissed){
        Swal.fire({
          icon: 'info',
          title: '¡Correcto!',
          text: 'Se canceló la eliminación del dispositivo',
          width: "75%",
          heightAuto: true
        });
      } */
    });
  }
}
