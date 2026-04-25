import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesDataService {

  funciones: any[] = [

    {
      funcion: 'Presentar informe mensual',
      responsable: 'Administrador',
      fecha: '2026-04-30',
      estado: 'Pendiente'
    },

    {
      funcion: 'Gestionar mantenimiento zonas comunes',
      responsable: 'Administrador',
      fecha: '2026-05-15',
      estado: 'Cumplido'
    },

    {
      funcion: 'Actualizar contratos proveedores',
      responsable: 'Administrador',
      fecha: '2025-12-10',
      estado: 'Pendiente'
    }

  ];

  obtenerFunciones() {

    return this.funciones;

  }

  agregarFuncion(nuevaFuncion: any) {

    this.funciones.push(nuevaFuncion);

  }

}
