import { Component, Input } from '@angular/core';
import { Egresos } from './egresos.model';
import { EgresosService } from './egresos-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egresos',
  imports: [CommonModule],
  templateUrl: './egresos.html',
  styleUrl: './egresos.css',
})
export class EgresosComponent {
  egresos: Egresos[] = [];
  @Input() ingresoTotal!: number;
  constructor(private egresosService: EgresosService)
  {
    this.egresos = egresosService.egresos;
  }

  eliminarEgreso(egreso: Egresos)
  {
    this.egresosService.eliminar(egreso);
  }

  porcentaje(egreso: Egresos)
  {
    return egreso.valor / this.ingresoTotal;
  }
}
