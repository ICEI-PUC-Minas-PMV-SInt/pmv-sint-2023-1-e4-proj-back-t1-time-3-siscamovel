import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/gerenciar/admin/admin.component';
import { VeiculosComponent } from './components/admin/gerenciar/veiculos/veiculos.component';
import { LoginComponent } from './components/admin/login/login.component';
import { HomeComponent } from './components/admin/home/home.component';
import { PeopleComponent } from './components/worldwide/people/people.component';
import { HelloSiscmComponent } from './components/siscamovel/hello-siscm/hello-siscm.component';
// Formulários de cadastro
import { VeiculoComponent } from './components/admin/cadastro/veiculo/veiculo.component';
import { EditarVeiculoComponent } from './components/admin/edicao/editar-veiculo/editar-veiculo.component';

const routes: Routes = [
  {
    path: '',
    component: HelloSiscmComponent
  },
  {
    path: 'admin/gerenciar/admin',
    component: AdminComponent
  },
  {
    path: 'admin/gerenciar/veiculos',
    component: VeiculosComponent
  },
  {
    path: 'admin/cadastro/veiculo',
    component: VeiculoComponent
  },
  {
    path: 'admin/editar/veiculo/:id',
    component: EditarVeiculoComponent
  },
  {
    path: 'admin/login',
    component: LoginComponent
  },  
  {
    path: 'admin/home',
    component: HomeComponent
  },
  {
    path: 'worldwide/people',
    component: PeopleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
