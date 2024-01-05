import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombateComponent } from './combate.component';

const routes: Routes = [{path: "", component:CombateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombateRoutingModule { }
