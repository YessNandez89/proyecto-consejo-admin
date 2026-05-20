import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass, NgIf } from '@angular/common';


import { FuncionesDataService } from '../funciones-data';

@Component({
  selector: 'app-funciones',

  imports: [RouterLink, NgFor, NgClass, NgIf],
  templateUrl: './funciones.html',
  styleUrl: './funciones.css',

})
export class Funciones implements OnInit {

  listaFunciones: any[] = [];

  cumplidas = 0;
  pendientes = 0;
  vencidas = 0;
  modoEdicion = false;
  funcionEditando: any = null;

  listaFiltrada: any[] = [];

  constructor(private funcionesService: FuncionesDataService) {}

  // 🔵 Se ejecuta al cargar la pantalla

  ngOnInit() {

    this.cargarFunciones();

  }

  // 🔵 Cargar funciones y contar estados

  cargarFunciones() {

  this.listaFunciones =
    this.funcionesService.obtenerFunciones();

  // 🔵 Mostrar todas al iniciar
  this.listaFiltrada = this.listaFunciones;

  this.contarEstados();

}

  // 🔵 Lógica correcta del estado

  calcularEstado(fecha: string, estado: string) {

    // Si está cumplido manualmente
    if (estado === 'Cumplido') {

      return 'Cumplido';

    }

    const hoy = new Date();
    const fechaLimite = new Date(fecha);

    // Si está vencido
    if (fechaLimite < hoy) {

      return 'Vencido';

    }

    // Si no está vencido → pendiente
    return 'Pendiente';


  }

  calcularDiasRestantes(fecha: string) {

  if (!fecha) return 0;

  const hoy = new Date();

  // 🔵 Separar fecha manualmente (muy importante)
  const partes = fecha.split('-');

  const fechaLimite = new Date(
    Number(partes[0]),
    Number(partes[1]) - 1,
    Number(partes[2])
  );

  hoy.setHours(0, 0, 0, 0);
  fechaLimite.setHours(0, 0, 0, 0);

  const diferencia =
    (fechaLimite.getTime() - hoy.getTime())
    / (1000 * 60 * 60 * 24);

  return Math.floor(diferencia);

}
obtenerClasePrioridad(prioridad: string) {

  if (prioridad === 'Alta') {

    return 'prioridad-alta';

  }

  if (prioridad === 'Media') {

    return 'prioridad-media';

  }

  if (prioridad === 'Baja') {

    return 'prioridad-baja';

  }

  return '';

}


obtenerClaseDias(fecha: string, prioridad: string) {

  const dias =
    this.calcularDiasRestantes(fecha);

  if (dias < 0) {

    return 'dias-vencidos';

  }

  if (prioridad === 'Alta' && dias <= 5) {

    return 'dias-vencidos';

  }

  if (prioridad === 'Media' && dias <= 3) {

    return 'dias-urgentes';

  }

  if (prioridad === 'Baja' && dias <= 1) {

    return 'dias-urgentes';

  }

  return 'dias-normal';

}




  // 🔵 Contar estados

  contarEstados() {

    this.cumplidas = 0;
    this.pendientes = 0;
    this.vencidas = 0;

    for (let f of this.listaFunciones) {

      const estado =
        this.calcularEstado(f.fecha, f.estado);

      if (estado === 'Cumplido') {

        this.cumplidas++;

      }

      else if (estado === 'Pendiente') {

        this.pendientes++;

      }

      else if (estado === 'Vencido') {

        this.vencidas++;

      }

    }

  }
    editarFuncion(funcion: any) {

    this.funcionEditando = funcion;

    this.modoEdicion = true;

}

eliminarFuncion(funcion: any) {

  const confirmar =
    confirm('¿Deseas eliminar esta función?');

  if (!confirmar) {

    return;

  }

  this.listaFunciones =
    this.listaFunciones.filter(f => f !== funcion);

  this.listaFiltrada =
    this.listaFunciones;

  this.contarEstados();

}
 filtrarEstado(estado: string) {

  if (estado === 'Todas') {

    this.listaFiltrada =
      this.listaFunciones;

    return;

  }

  this.listaFiltrada =
    this.listaFunciones.filter(f =>

      this.calcularEstado(f.fecha, f.estado) === estado

    );

}

filtrarPrioridad(prioridad: string) {

  this.listaFiltrada =
    this.listaFunciones.filter(f =>

      f.prioridad === prioridad

    );

} 


}


