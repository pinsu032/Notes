import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NriComponent } from './nri.component';

const routes: Routes = [{ path: '', component: NriComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NriRoutingModule { }
