import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from "./cabecera/cabecera";
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { Formulario } from './formulario/formulario';
import { Ingresos } from './ingresos/ingresos.model';
import { IngresosComponent } from './ingresos/ingresos';
import { Egresos } from './egresos/egresos.model';
import { EgresosComponent } from './egresos/egresos';
import { IngresosService } from './ingresos/ingresos-service';
import { EgresosService } from './egresos/egresos-service';

registerLocaleData(localeEs, 'mx');

@Component({
  selector: 'app-root',
  imports: [ Cabecera, Formulario, IngresosComponent, EgresosComponent],
  //providers: [{provide: LOCALE_ID, useValue: 'mx'}],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ingresos: Ingresos[] = [];
  egresos: Egresos[] = [];

  constructor(
    private ingresosServicio: IngresosService,
    private egresisServiccio: EgresosService
  ){
    this.ingresos = this.ingresosServicio.ingresos;
    this.egresos = this.egresisServiccio.egresos;
  }

  getIngresoTotal()
  {
    let ingresoTotal: number = 0;
    this.ingresos.forEach( ingreso => {
      ingresoTotal += ingreso.valor;
    });

    return ingresoTotal;
  }

  getEgresoTotal()
  {
    let egresoTotal: number = 0;
    this.egresos.forEach( egreso => {
      egresoTotal += egreso.valor;
    })

    return egresoTotal;
  }

  getPorcentajeTotal()
  {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal()
  {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
