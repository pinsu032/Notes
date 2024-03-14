import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'personal', loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule) }, { path: 'nri', loadChildren: () => import('./nri/nri.module').then(m => m.NriModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
