import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FuncionesDataService } from '../funciones-data';

@Component({
  selector: 'app-agregar-funcion',

  imports: [FormsModule],

  templateUrl: './agregar-funcion.html',
  styleUrl: './agregar-funcion.css',
})
export class AgregarFuncion {

  funcion = '';
  responsable = '';
  fecha = '';
  estado = 'Pendiente';

  constructor(
    private funcionesService: FuncionesDataService,
    private router: Router
  ) {}

  guardar() {

    const nuevaFuncion = {

      funcion: this.funcion,
      responsable: this.responsable,
      fecha: this.fecha,
      estado: this.estado

    };

    this.funcionesService.agregarFuncion(nuevaFuncion);

    this.router.navigate(['/funciones']);

  }

}
