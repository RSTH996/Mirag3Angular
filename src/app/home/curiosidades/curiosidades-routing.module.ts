import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuriosidadesComponent } from './curiosidades.component';

const routes: Routes = [{path:"", component:CuriosidadesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuriosidadesRoutingModule { }
