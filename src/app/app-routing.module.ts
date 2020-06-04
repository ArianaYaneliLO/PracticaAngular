import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LenguajesComponent } from './Componentes/lenguajes/lenguajes.component';
import { DetallesComponent } from './Componentes/detalles/detalles.component';

const rutas: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'lenguajes', component: LenguajesComponent},
  {path: 'detalles', component: DetallesComponent},
  {path: '**', pathMatch: 'full', redirectTo:'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
