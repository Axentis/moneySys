import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorteurComponent } from './porteur/porteur.component';

const routes: Routes = [
  {path:'porteur', component:PorteurComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
    routes,
    {enableTracing: true} 
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
