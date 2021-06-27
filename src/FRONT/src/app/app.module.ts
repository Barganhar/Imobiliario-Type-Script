import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
///////////////


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContentComponent } from './template/content/content.component';
import { HeaderComponent } from './components/template/header/header.component';
import { CadastrarCasaComponent } from './components/views/cadastrar-casa/cadastrar-casa.component';
import { ListarCasaComponent } from './components/views/listar-casa/listar-casa.component';
import { ListarClienteComponent } from './components/views/listar-cliente/listar-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarVendaComponent } from './components/views/cadastrar-venda/cadastrar-venda.component';
import { ListarVendaComponent } from './components/views/listar-venda/listar-venda.component';
import { ListarAluguelComponent } from './components/views/listar-aluguel/listar-aluguel.component';
import { CadastrarClienteComponent } from './components/views/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarAluguelComponent } from './components/views/cadastrar-aluguel/cadastrar-aluguel.component';


@NgModule({
  declarations: [
    AppComponent,
    //ContentComponent,
    HeaderComponent,
    CadastrarCasaComponent,
    CadastrarClienteComponent,
    ListarCasaComponent,
    ListarClienteComponent,
    CadastrarVendaComponent,
    CadastrarAluguelComponent,
    ListarVendaComponent,
    ListarAluguelComponent,
    CadastrarClienteComponent
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
