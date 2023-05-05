import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/admin/login/login.component';
import { HomeComponent } from './components/admin/home/home.component';
import { AdminComponent } from './components/admin/gerenciar/admin/admin.component';
import { PessoasComponent } from './components/admin/gerenciar/pessoas/pessoas.component';
import { VeiculosComponent } from './components/admin/gerenciar/veiculos/veiculos.component';
import { PeopleComponent } from './components/worldwide/people/people.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { HeaderComponent } from './components/general/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    PessoasComponent,
    VeiculosComponent,
    PeopleComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
