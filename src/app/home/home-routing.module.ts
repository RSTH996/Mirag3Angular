import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { NacimientoModule } from './nacimiento/nacimiento.module';
import { AvanceModule } from './avance/avance.module';
import { JubilacionModule } from './jubilacion/jubilacion.module';
import { CuriosidadesModule } from './curiosidades/curiosidades.module';
import { CombateModule } from './combate/combate.module';

const routes: Routes = [
  {path:"",
  component: HomeComponent},
  {path: "nacimiento",
  loadChildren: () => import("./nacimiento/nacimiento-routing.module").then(m => NacimientoModule)},

  {path:"avance",
  loadChildren: () => import("./avance/avance-routing.module").then(m => AvanceModule)},

  {path: "combate",
  loadChildren: ()=> import("./combate/combate-routing.module").then(m => CombateModule)},

  {path: "jubilacion",
  loadChildren:()=> import("./jubilacion/jubilacion-routing.module").then(m => JubilacionModule)},

  {path:"curiosidades",
  loadChildren:() => import("./curiosidades/curiosidades-routing.module").then(m => CuriosidadesModule)},
  
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
