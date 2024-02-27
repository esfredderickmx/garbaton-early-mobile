import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dispositivo } from 'src/app/models/Dispositivo';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  info: Dispositivo = new Dispositivo();
  ubicacion: Dispositivo = new Dispositivo();
  nombreDispositivo: string;

  constructor(
    private servicioDispositivos: DispositivosService,
    private rutaActiva: ActivatedRoute,
    private enrutador: Router
  ) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(nombre => {
      this.nombreDispositivo = nombre['dispositivo'];
      
      //console.log(this.nombreDispositivo);      
    });

    this.servicioDispositivos.obtenerInfo(this.nombreDispositivo).subscribe((respuesta: Dispositivo) => {
      console.log(respuesta);

      this.info = respuesta;
    });

    this.servicioDispositivos.obtenerUbicacion(this.nombreDispositivo).subscribe((respuesta: Dispositivo) => {
      console.log(respuesta);

      this.ubicacion = respuesta;
    });
  }

  actualizarDispositivo(formulario: NgForm){
    if(formulario.invalid){
      return;
    }

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

    this.servicioDispositivos.asignarInfo(this.nombreDispositivo, info).then(respuestaInfo => {
      this.servicioDispositivos.asignarUbicación(this.nombreDispositivo, ubicacion).then(respuestaUbicacion => {
        Swal.fire({
          icon: 'success',
          title: '¡Hecho!',
          text: 'Información del dispositivo actualizada',
          width: "75%",
          heightAuto: true
        });

        this.enrutador.navigateByUrl('/dispositivos');
      });
    });
  }
}
