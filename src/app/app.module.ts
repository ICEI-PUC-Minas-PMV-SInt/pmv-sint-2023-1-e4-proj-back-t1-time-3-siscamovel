import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ListarVeiculosComponent } from './components/admin/veiculos/listar-veiculos/listar-veiculos.component';
import { CadastrarVeiculosComponent } from './components/admin/veiculos/cadastrar-veiculos/cadastrar-veiculos.component';
import { FormsModule } from '@angular/forms';
import { EditarVeiculosComponent } from './components/admin/veiculos/editar-veiculos/editar-veiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    ListarVeiculosComponent,
    CadastrarVeiculosComponent,
    EditarVeiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
