import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
})
export class ConfiguracionesPage implements OnInit {

  descripciones = false;
  favoritos = false;

  constructor(
    private servicioFirebase: FirebaseService,
    private enrutador: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('descripciones')){
      this.descripciones = true;
    } else{
      this.descripciones = false;
    }

    if(localStorage.getItem('favoritos')){
      this.favoritos = true;
    } else{
      this.favoritos = false;
    }
  }

  alternarDescripciones() {
    this.descripciones = !this.descripciones;

    //console.log(this.descripciones);

    if(this.descripciones){
      localStorage.setItem('descripciones', this.descripciones.valueOf.toString());
      
      Swal.fire({
        icon: 'success',
        title: '¡Hecho!',
        text: 'Descripciones activadas',
        width: "75%",
        heightAuto: true
      });
    } else{
      localStorage.removeItem('descripciones');
      
      Swal.fire({
        icon: 'warning',
        title: '¡Hecho!',
        text: 'Descripciones desactivadas',
        width: "75%",
        heightAuto: true
      });
    }
  }

  alternarFavoritos() {
    this.favoritos = !this.favoritos;

    //console.log(this.favoritos);

    if(this.favoritos){
      localStorage.setItem('favoritos', this.favoritos.valueOf.toString());
      
      Swal.fire({
        icon: 'success',
        title: '¡Hecho!',
        text: 'Categoría de favoritos activada',
        width: "75%",
        heightAuto: true
      });
    } else{
      localStorage.removeItem('favoritos');
      
      Swal.fire({
        icon: 'warning',
        title: '¡Hecho!',
        text: 'Categoría de favoritos desactivada',
        width: "75%",
        heightAuto: true
      });
    }
  }

  cerrarSesion() {
    this.servicioFirebase.cerrarSesion();
    this.enrutador.navigateByUrl('/principal');
  }

}
