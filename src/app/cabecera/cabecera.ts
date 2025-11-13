import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecera',
  imports: [CommonModule],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css',
})
export class Cabecera {
  title:string = "Presupuesto disponible:";

  @Input() presupuestoTotal!: number;
  @Input() ingresoTotal!: number;
  @Input() egresoTotal!: number;
  @Input() porcentajeTotal!: number;
}
