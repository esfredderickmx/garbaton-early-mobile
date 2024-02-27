import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss'],
})
export class GraficaComponent implements OnInit {

  @Input() datos: any[] = [];
  @Input() escalaMaxima: any;
  
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = 'KGs de basura';
  timeline: boolean = true;
  yScaleMin: any = 0;

  colorScheme = 'picnic';

  constructor() { }

  ngOnInit() {}

  onSelect(data): void {
    console.log('Objeto seleccionado', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activo', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Inactivo', JSON.parse(JSON.stringify(data)));
  }

}
