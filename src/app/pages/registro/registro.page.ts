import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario;
  recordarUsuario = false;

  constructor(
    private servicioFirebase: FirebaseService,
    private enrutador: Router
  ) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  registrarUsuario(formulario: NgForm){
    //console.log(formulario);
    
    if(formulario.invalid){
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Registrando usuario',
      text: 'Un momento porfavor...',
      allowOutsideClick: false,
      width: "75%",
      heightAuto: true
    });
    Swal.showLoading();

    this.servicioFirebase.registrarUsuario(this.usuario).subscribe(respuesta => {
      //console.log(respuesta);
      Swal.close();

      if(this.recordarUsuario){
        localStorage.setItem('email', this.usuario.email);
      }

      this.enrutador.navigateByUrl('/dispositivos');
    }, error => {
      //console.log(error.error.error.message);
      
      Swal.fire({
        icon: 'error',
        title: '¡Oh no!',
        text: 'Error al registrar usuario: '+error.error.error.message,
        width: "75%",
        heightAuto: true
      });
    })
  }

}
