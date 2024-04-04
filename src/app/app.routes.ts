import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./signals/signals.module').then( m => m.SignalsModule)
  }
];
