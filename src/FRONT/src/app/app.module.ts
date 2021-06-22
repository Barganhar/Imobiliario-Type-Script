import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContentComponent } from './template/content/content.component';
import { HeaderComponent } from './components/template/header/header.component';
import { CadastrarCasaComponent } from './components/views/cadastrar-casa/cadastrar-casa.component';
import { CadastrarClienteComponent } from './components/views/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarCorretorComponent } from './components/views/cadastrar-corretor/cadastrar-corretor.component';
import { ListarCasaComponent } from './components/views/listar-casa/listar-casa.component';
import { ListarCorretorComponent } from './components/views/listar-corretor/listar-corretor.component';
import { ListarClienteComponent } from './components/views/listar-cliente/listar-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    //ContentComponent,
    HeaderComponent,
    CadastrarCasaComponent,
    CadastrarClienteComponent,
    CadastrarCorretorComponent,
    ListarCasaComponent,
    ListarCorretorComponent,
    ListarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
