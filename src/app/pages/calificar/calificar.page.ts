import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.page.html',
  styleUrls: ['./calificar.page.scss'],
})
export class CalificarPage implements OnInit {

  constructor(private controlador: AlertController) { }

  ngOnInit() {
  }

  calificar() {
    Swal.fire({
      icon: 'info',
      title: '¡Gracias por animarte!',
      html: 'Da clic en este <a href="">enlace</a> para calificar la app',
      width: "75%",
      heightAuto: true
    });
  }

}
