import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { SignalsLayoutComponent } from './layouts/SignalsLayout/signals-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    PropertyPageComponent,
    UserInfoPageComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    HttpClientModule
  ],
  providers:[
    UserService
  ]
})
export class SignalsModule { }
