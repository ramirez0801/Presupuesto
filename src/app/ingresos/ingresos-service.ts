import { Injectable } from '@angular/core';
import { Ingresos } from './ingresos.model';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  ingresos: Ingresos[] = [
    new Ingresos('Salario',4000),
    new Ingresos('Venta Coche', 500)
  ]

   eliminar(ingreso: Ingresos) {
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }

}
