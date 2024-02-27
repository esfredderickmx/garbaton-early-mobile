import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private rutaAutenticacion = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private apiKey = "AIzaSyCpVdDgfOPj7lhTXQ70v-0sHHNvc6PyYKE";
  private rutaBase = "https://garbaton-e3092-default-rtdb.firebaseio.com/";

  tokenUsuario: string;

  constructor(private http: HttpClient) { }

  inciarSesion(usuario: Usuario) {
    const datosAutenticacion = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.rutaAutenticacion}signInWithPassword?key=${this.apiKey}`, datosAutenticacion
    ).pipe(map(respuesta => {
      //console.log(respuesta);

      this.almacenarToken(respuesta['idToken']);
      localStorage.setItem('uuid', respuesta['localId']);

      return respuesta;
    }));
  }

  registrarUsuario(usuario: Usuario) {
    const datosAutenticacion = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.rutaAutenticacion}signUp?key=${this.apiKey}`, datosAutenticacion
    ).pipe(map(respuesta => {
      //console.log(respuesta);

      this.almacenarToken(respuesta['idToken']);
      localStorage.setItem('uuid', respuesta['localId']);

      const datos = {
        ...usuario,
        tipo: "normal",
        uuid: respuesta['localId']
      }

      this.http.post(`${this.rutaBase}usuarios.json`, datos).subscribe(
        respuestaInsercion => {
          //console.log(respuestaInsercion);

          /* this.http.post(
            `${this.rutaBase}usuarios/${respuestaInsercion['name']}.json`, {clave: respuestaInsercion['name']}
          ).subscribe(respuestaFinal => {
            //console.log(respuestaFinal);
          }) */
        }
      );

      return respuesta;
    }))
  }

  almacenarToken(idToken: string) {
    this.tokenUsuario = idToken;
    localStorage.setItem('token', idToken);

    let diaActual = new Date();
    diaActual.setSeconds(3600);
    //console.log(diaActual);
    
    localStorage.setItem('expiracion', diaActual.getTime().toString());
  }

  cerrarSesion() {
    localStorage.removeItem('expiracion');
    localStorage.removeItem('token');
    localStorage.removeItem('uuid');
  }

  obtenerToken() {
    if(localStorage.getItem('token')){
      this.tokenUsuario = localStorage.getItem('token');
    } else{
      this.tokenUsuario = "";
    }

    return this.tokenUsuario;
  }

  autenticidad(): boolean {
    if(this.tokenUsuario.length<2){
      return false;
    }

    let expiracion = Number(localStorage.getItem('expiracion'));
    let fechaExpiracion = new Date();
    fechaExpiracion.setTime(expiracion);

    if(fechaExpiracion>new Date()){
      return true;
    } else{
      return false;
    }
  }
}
