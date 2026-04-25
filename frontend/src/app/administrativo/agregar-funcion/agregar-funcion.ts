import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FuncionesDataService } from '../funciones-data';

@Component({
  selector: 'app-agregar-funcion',

  // 🔴 AQUÍ ESTABA EL ERROR
  imports: [FormsModule, RouterLink],

  templateUrl: './agregar-funcion.html',
  styleUrl: './agregar-funcion.css',
})
export class AgregarFuncion {

  funcion = '';
  responsable = '';
  fecha = '';
  estado = 'Pendiente';
  prioridad = 'Media';


  constructor(
    private funcionesService: FuncionesDataService,
    private router: Router
  ) {}

  guardar() {

    const nuevaFuncion = {

  funcion: this.funcion,
  responsable: this.responsable,
  fecha: this.fecha,
  estado: this.estado,
  prioridad: this.prioridad

};


    this.funcionesService.agregarFuncion(nuevaFuncion);

    // 🔵 Esto ya estaba bien
    this.router.navigate(['/funciones']);

  }

}
