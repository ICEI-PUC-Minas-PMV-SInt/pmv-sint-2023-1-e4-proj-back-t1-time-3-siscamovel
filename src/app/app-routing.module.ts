import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ListarVeiculosComponent } from './components/admin/veiculos/listar-veiculos/listar-veiculos.component';

const routes: Routes = [
  {
    path: 'admin/home',
    component: AdminHomeComponent
  },  
  {
    path: 'admin/veiculos/listar',
    component: ListarVeiculosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
