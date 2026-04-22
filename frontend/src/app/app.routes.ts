import { Routes } from '@angular/router';

import { Login } from './auth/login/login';
import { Home } from './dashboard/home/home';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'dashboard',
    component: Home
  }

];
