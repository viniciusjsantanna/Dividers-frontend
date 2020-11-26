import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculateDividersComponent } from './modules/calculate-dividers/calculate-dividers.component';

const routes: Routes = [
  {
    component: CalculateDividersComponent,
    path: 'Calculate'
  },
  {
    component: CalculateDividersComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
