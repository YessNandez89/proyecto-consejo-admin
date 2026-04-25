import { Routes } from '@angular/router';

import { Login } from './auth/login/login';
import { Home } from './dashboard/home/home';
import { Administrativo } from './administrativo/administrativo';
import { Funciones } from './administrativo/funciones/funciones';
import { AgregarFuncion } from './administrativo/agregar-funcion/agregar-funcion';



export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'dashboard',
    component: Home
  },

  {
    path: 'administrativo',
    component: Administrativo
  },

  {
  path: 'funciones',
  component: Funciones
},

{
  path: 'agregar-funcion',
  component: AgregarFuncion
}
  

];
