import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

import { FuncionesDataService } from '../funciones-data';

@Component({
  selector: 'app-funciones',

  imports: [RouterLink, NgFor, NgClass],

  templateUrl: './funciones.html',
  styleUrl: './funciones.css',
})
export class Funciones {

  listaFunciones: any[] = [];

  constructor(private funcionesService: FuncionesDataService) {

    this.listaFunciones =
      this.funcionesService.obtenerFunciones();

  }

  calcularEstado(fecha: string, estado: string) {

    if (estado === 'Cumplido') {

      return 'Cumplido';

    }

    const hoy = new Date();
    const fechaLimite = new Date(fecha);

    const diferencia =
      (fechaLimite.getTime() - hoy.getTime())
      / (1000 * 60 * 60 * 24);

    if (diferencia < 0) {

      return 'Vencido';

    }

    if (diferencia <= 3) {

      return 'Pendiente';

    }

    return 'En tiempo';

  }

}
