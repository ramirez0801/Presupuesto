import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresosService } from '../ingresos/ingresos-service';
import { EgresosService } from '../egresos/egresos-service';
import { Ingresos } from '../ingresos/ingresos.model';
import { Egresos } from '../egresos/egresos.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  tipo: string = 'ingresoOpcion'
  descripcionInput: string | null = null;
  valorInput: number | null = null;

  constructor(private ingresoServicio: IngresosService, private egresoServicio: EgresosService){}

  tipoOperacion(event: Event)
  {
    const elementoSelect = event.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }

  agregarValor()
  {
    if(this.descripcionInput != null && this.valorInput != null)
    {
      if(this.tipo === 'ingresoOpcion')
      {
        this.ingresoServicio.ingresos.push(
          new Ingresos(this.descripcionInput, this.valorInput)
        );
      }
      if(this.tipo === 'egresoOpcion')
      {
        this.egresoServicio.egresos.push(
          new Egresos(this.descripcionInput, this.valorInput)
        );
      }
    }
    else
      {
      console.log("Introduce valores validos");
    }
    this.descripcionInput = null;
    this.valorInput = null;
  }
}