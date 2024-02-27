import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DispositivosService } from 'src/app/services/dispositivos.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  dispositivo: string;
  limite: any;
  universoFecha: any[] = [];
  universoPeso: any[] = [];
  datos: any = {};
  info: any = {};
  ubicacion: any = {};

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicioDispositivos: DispositivosService
  ) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(respuesta => {
      this.dispositivo = respuesta['dispositivo'];

      //console.log(this.dispositivo);
    });

    this.servicioDispositivos.obtenerUniversoFecha(this.dispositivo).pipe(map(respuesta => {
      return respuesta.map(({fecha, basura}) => ({name: new Date(fecha).toLocaleTimeString(), value: basura}))
    })).subscribe(respuesta => {
      //console.log(respuesta);
      
      var info = [{"name": this.dispositivo, "series": respuesta}];
      //console.log(info);
      
      this.universoFecha = info;
    });

    this.servicioDispositivos.obtenerUniversoPeso(this.dispositivo).pipe(map(respuesta => {
      return respuesta.map(({fecha, basura}) => ({name: new Date(fecha).toLocaleString(), value: basura}))
    })).subscribe(respuesta => {
      //console.log(respuesta);
      
      var info = [{"name": this.dispositivo, "series": respuesta}];
      //console.log(info);
      
      this.universoPeso = info;
    });

    this.servicioDispositivos.obtenerInfo(this.dispositivo).subscribe(respuesta => {
      //console.log(respuesta);
      
      this.info = respuesta;
      this.limite = this.info.limite;
    })

    this.servicioDispositivos.obtenerUbicacion(this.dispositivo).subscribe(respuesta => {
      //console.log(respuesta);
      
      this.ubicacion = respuesta;
    })
  }

}
