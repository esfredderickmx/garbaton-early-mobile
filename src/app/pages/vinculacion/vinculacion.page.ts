import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Dispositivo } from 'src/app/models/Dispositivo';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vinculacion',
  templateUrl: './vinculacion.page.html',
  styleUrls: ['./vinculacion.page.scss'],
})
export class VinculacionPage implements OnInit {
  
  dispositivos: any[];
  numeroDispositivos: number;
  info: Dispositivo = new Dispositivo();
  ubicacion: Dispositivo = new Dispositivo();

  constructor(
    private servicioDispositivos: DispositivosService,
    private enrutador: Router
  ) { }

  ngOnInit() {
    this.servicioDispositivos.obtenerDispositivos().subscribe((dispositivo: any[]) => {
      console.log(dispositivo);
      
      this.dispositivos = dispositivo;
      this.numeroDispositivos = this.dispositivos.length;
    });
  }

  vincularDispositivo(formulario: NgForm){
    if(formulario.invalid){
      return;
    }

    this.info.propietario = localStorage.getItem('uuid');

    const info = {
      ...this.info
    }

    delete info.estado;
    delete info.municipio;

    const ubicacion = {
      ...this.ubicacion
    }

    delete ubicacion.nombre;
    delete ubicacion.descripcion;
    delete ubicacion.promedio;
    delete ubicacion.propietario;
    delete ubicacion.id;

    console.log(info);
    console.log(ubicacion);

    if(this.numeroDispositivos<1){
      this.servicioDispositivos.agregarDispositivo(info, ubicacion).then(respuesta => {
          Swal.fire({
            icon: 'success',
            title: '¡Hecho!',
            text: 'Dispositivo vinculado',
            width: "75%",
            heightAuto: true
          });
  
          this.enrutador.navigateByUrl('/dispositivos');
      });
    } else{
      Swal.fire({
        icon: 'error',
        title: '¡Aguarda!',
        text: 'Ya has vinculado el único dispositivo disponible',
        width: "75%",
        heightAuto: true
      });

      this.enrutador.navigateByUrl('/dispositivos');
    }
    
  }
}
