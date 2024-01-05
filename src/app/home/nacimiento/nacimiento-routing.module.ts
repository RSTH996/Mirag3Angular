import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NacimientoComponent } from './nacimiento.component';

const routes: Routes = [{path:"",component:NacimientoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NacimientoRoutingModule { }
