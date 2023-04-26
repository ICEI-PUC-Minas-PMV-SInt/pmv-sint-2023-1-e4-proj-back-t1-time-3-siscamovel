import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ListarVeiculosComponent } from './components/admin/veiculos/listar-veiculos/listar-veiculos.component';
import { CadastrarVeiculosComponent } from './components/admin/veiculos/cadastrar-veiculos/cadastrar-veiculos.component';
import { EditarVeiculosComponent } from './components/admin/veiculos/editar-veiculos/editar-veiculos.component';

const routes: Routes = [
  {
    path: 'admin/home',
    component: AdminHomeComponent
  },  
  {
    path: 'admin/veiculos/listar',
    component: ListarVeiculosComponent
  },
  {
    path: 'admin/veiculos/cadastrar',
    component: CadastrarVeiculosComponent
  },
  {
    path: 'admin/veiculos/editar/:id',
    component: EditarVeiculosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
