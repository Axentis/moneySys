import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorteurComponent } from './porteur/porteur.component';
import { CompteComponent } from './porteur/compte/compte.component'
import { HandlingPorteurComponent } from './porteur/handling-porteur/handling-porteur.component';


const routes: Routes = [
  {
    path: 'porteur',
    component: PorteurComponent,
    children: [
      {
        path: '',
        component: HandlingPorteurComponent
      },
      {
        path: 'compte',
        component: CompteComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // {enableTracing: true} 
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
