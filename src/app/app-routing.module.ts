import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/gerenciar/admin/admin.component';
import { PessoasComponent } from './components/admin/gerenciar/pessoas/pessoas.component';
import { VeiculosComponent } from './components/admin/gerenciar/veiculos/veiculos.component';
import { LoginComponent } from './components/admin/login/login.component';
import { HomeComponent } from './components/admin/home/home.component';
import { PeopleComponent } from './components/worldwide/people/people.component';
import { HelloSiscmComponent } from './components/siscamovel/hello-siscm/hello-siscm.component';

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
    path: 'admin/gerenciar/pessoas',
    component: PessoasComponent
  },
  {
    path: 'admin/gerenciar/veiculos',
    component: VeiculosComponent
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
