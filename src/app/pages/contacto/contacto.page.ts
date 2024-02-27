import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  
  comentarios: any[];
  numeroComentarios: number;
  asunto: string;
  mensaje: string;

  constructor(private servicioDispositivos: DispositivosService) { }

  ngOnInit() {
    this.servicioDispositivos.obtenerComentarios().subscribe((comentario: any[]) => {
      //console.log(dispositivo);
      
      this.comentarios = comentario;
      this.numeroComentarios = this.comentarios.length+1;
    });
  }

  contactar(formulario: NgForm){
    if(formulario.invalid){
      return;
    }

    if(this.servicioDispositivos.enviarComentario(this.asunto, this.mensaje, this.numeroComentarios)){
      Swal.fire({
        icon: 'success',
        title: '¡Hecho!',
        text: 'Comentario enviado',
        width: "75%",
        heightAuto: true
      });
    }
  }

}
