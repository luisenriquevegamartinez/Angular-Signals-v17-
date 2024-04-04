import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layouts/SignalsLayout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { CommonModule } from '@angular/common';

export const SignalsRoutes: Routes = [
  {
    path: 'signals',
    component: SignalsLayoutComponent,
    children: [
      {
        path: 'counter',
        component: CounterPageComponent
      },
      {
        path: 'user-info',
        component: UserInfoPageComponent
      },
      {
        path: 'property-page',
        component: PropertyPageComponent
      },
      {
        path: '**',
        redirectTo: 'counter'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'signals'
  }
];

@NgModule({
  imports: [RouterModule.forChild(SignalsRoutes), CommonModule],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
