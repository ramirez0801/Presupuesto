import { Injectable } from '@angular/core';
import { Egresos } from './egresos.model';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  egresos: Egresos[] = [
    new Egresos('Renta', 900),
    new Egresos('Ropa', 200)
  ]

  eliminar(egreso: Egresos)
  {
    const indice = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }

}
