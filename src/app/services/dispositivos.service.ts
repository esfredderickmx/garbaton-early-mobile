import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Dispositivo } from '../models/Dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  constructor(private baseDatos: AngularFireDatabase) { }

  obtenerDispositivos() {
    let uuid = localStorage.getItem('uuid');
    
    return this.baseDatos.list('dispositivos', referencia => referencia.orderByChild('info/propietario').equalTo(uuid)).valueChanges();
  }

  obtenerFavoritos() {
    let uuid = localStorage.getItem('uuid');

    return this.baseDatos.list('dispositivos', referencia => referencia.orderByChild("estado").equalTo(true)).valueChanges();
  }

  obtenerUniversoFecha(dispositivo: string) {
    return this.baseDatos.list(`dispositivos/${dispositivo}/universo`, referencia => referencia.orderByChild('fecha').limitToLast(10)).valueChanges();
  }

  obtenerUniversoPeso(dispositivo: string) {
    return this.baseDatos.list(`dispositivos/${dispositivo}/universo`, referencia => referencia.orderByChild('basura').limitToLast(10)).valueChanges();
  }

  obtenerDatos(dispositivo: string) {
    return this.baseDatos.list(`dispositivos/${dispositivo}/datos`).valueChanges();
  }

  obtenerInfo(dispositivo: string) {
    return this.baseDatos.object(`dispositivos/${dispositivo}/info`).valueChanges();
  }

  obtenerUbicacion(dispositivo: string) {
    return this.baseDatos.object(`dispositivos/${dispositivo}/ubicacion`).valueChanges();
  }

  asignarInfo(dispositivo: string, datos: Dispositivo) {
    return this.baseDatos.list(`dispositivos/${dispositivo}`).set('info', datos);
  }

  asignarUbicación(dispositivo: string, datos: Dispositivo) {
    return this.baseDatos.list(`dispositivos/${dispositivo}`).set('ubicacion', datos);
  }

  asignarEstado(dispositivo: string, estado: boolean) {
    if(estado){
      return this.baseDatos.list(`dispositivos/${dispositivo}`).set('estado', false);
    } else{
      return this.baseDatos.list(`dispositivos/${dispositivo}`).set('estado', true);
    }
  }

  agregarDispositivo(info: Dispositivo, ubicacion: Dispositivo) {
    return this.baseDatos.list(`dispositivos/${info.id}`).set('estado', false).then(resultadoCreacion => {
      this.baseDatos.object(`dispositivos/${info.id}/info`).set(info).then(resultadoInfo => {
        this.baseDatos.object(`dispositivos/${info.id}/ubicacion`).set(ubicacion);
      })
    })
  }

  removerDispositivo(dispositivo: string) {
    return this.baseDatos.list(`dispositivos`).remove(dispositivo)
  }

  obtenerComentarios() {
    return this.baseDatos.list('comentarios').valueChanges();
  }

  enviarComentario(asunto: string, mensaje: string, numero: number) {
    return this.baseDatos.list(`comentarios/comentario-${numero}`).set('asunto', asunto).then(resultado => {
      this.baseDatos.list(`comentarios/comentario-${numero}`).set('mensaje', mensaje);
    });
  }

  /* asignarUsuario(dispositivo: string) {
    let uuid = localStorage.getItem('uuid');

    return this.baseDatos.list(`dispositivos/${dispositivo}/info`).set('propietario', {uuid: uuid});
  }

  asignarNombre(dispositivo: string) {
    return this.baseDatos.list(`dispositivos/${dispositivo}/info`).set(dispositivo, {nombre: dispositivo});
  }

  asignarDescripción(dispositivo: string) {
    return this.baseDatos.list(`dispositivos/${dispositivo}/info`).set(dispositivo, {descripcion: dispositivo});
  }

  asignarLimite(dispositivo: string) {
    return this.baseDatos.list(`dispositivos/${dispositivo}/info`).set(dispositivo, {limite: dispositivo});
  } */
}
