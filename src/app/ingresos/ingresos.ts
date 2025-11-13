import { Component } from '@angular/core';
import { Ingresos } from './ingresos.model';
import { IngresosService } from './ingresos-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingresos',
  imports: [CommonModule],
  templateUrl: './ingresos.html',
  styleUrl: './ingresos.css',
})
export class IngresosComponent {
  ingresos: Ingresos[] = [];

  constructor(private ingresoServicio: IngresosService)
  {
    this.ingresos = ingresoServicio.ingresos;
  }

  eliminarIngreso(ingreso: Ingresos)
  {
    this.ingresoServicio.eliminar(ingreso);
  }
}
