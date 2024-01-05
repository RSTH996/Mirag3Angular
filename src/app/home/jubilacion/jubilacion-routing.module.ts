import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JubilacionComponent } from './jubilacion.component';

const routes: Routes = [{path:"",component:JubilacionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JubilacionRoutingModule { }
