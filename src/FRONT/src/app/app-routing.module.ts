import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCasaComponent } from './components/views/cadastrar-casa/cadastrar-casa.component';
import { ListarCasaComponent } from './components/views/listar-casa/listar-casa.component';
import { ListarClienteComponent } from './components/views/listar-cliente/listar-cliente.component';
import { CadastrarVendaComponent } from './components/views/cadastrar-venda/cadastrar-venda.component';
import { ListarVendaComponent } from './components/views/listar-venda/listar-venda.component';
import { ListarAluguelComponent } from './components/views/listar-aluguel/listar-aluguel.component';
import { CadastrarClienteComponent } from './components/views/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarAluguelComponent } from './components/views/cadastrar-aluguel/cadastrar-aluguel.component';

const routes: Routes = [
  
  {
    path: 'registro/cliente',
    component: CadastrarClienteComponent
  },
  {
    path: 'listar/cliente',
    component: ListarClienteComponent
  },
  {
    path: 'registro/casa',
    component: CadastrarCasaComponent
  },
  {
    path: 'listar/casa',
    component: ListarCasaComponent
  },
  {
    path: 'venda/cadastrar',
    component: CadastrarVendaComponent
  },
  {
    path: 'listar/venda',
    component: ListarVendaComponent
  },
  {
    path: 'aluguel/cadastrar',
    component: CadastrarAluguelComponent
  },
  {
    path: 'lista/alugar',
    component: ListarAluguelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
