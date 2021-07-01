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
import { EditarClienteComponent } from './components/views/editar-cliente/editar-cliente.component';
import { EditarCasaComponent } from './components/views/editar-casa/editar-casa.component';
import { EditarVendaComponent } from './components/views/editar-venda/editar-venda.component';
import { EditarAluguelComponent } from './components/views/editar-aluguel/editar-aluguel.component';
import { VendaDeletarComponent } from './components/views/venda-deletar/venda-deletar.component';
import { AluguelDeletarComponent } from './components/views/aluguel-deletar/aluguel-deletar.component';
import { CasaDeletarComponent } from './components/views/casa-deletar/casa-deletar.component';
import { ClienteDeletarComponent } from './components/views/cliente-deletar/cliente-deletar.component';

const routes: Routes = [
  
  //cliente
  {
    path: 'registro/cliente',
    component: CadastrarClienteComponent
  },
  {
    path: 'listar/cliente',
    component: ListarClienteComponent
  },
  {
    path: 'cliente/editar/:id',
    component: EditarClienteComponent
  },
  {
    path: 'remover/cliente/:id',
    component: ClienteDeletarComponent
  },
  //casa
  {
    path: 'registro/casa',
    component: CadastrarCasaComponent
  },
  {
    path: 'listar/casa',
    component: ListarCasaComponent
  },
  {
    path: 'casa/editar/:id',
    component: EditarCasaComponent
  },
  {
    path: 'remover/casa/:id',
    component: CasaDeletarComponent
  },
  //venda
  {
    path: 'venda/cadastrar',
    component: CadastrarVendaComponent
  },
  {
    path: 'listar/venda',
    component: ListarVendaComponent
  },
  {
    path: 'venda/editar/:id',
    component: EditarVendaComponent
  },
  {
    path: 'remover/venda/:id',
    component: VendaDeletarComponent
  },
  //aluguel
  {
    path: 'aluguel/cadastrar',
    component: CadastrarAluguelComponent
  },
  {
    path: 'listar/aluguel',
    component: ListarAluguelComponent
  },
  {
    path: 'aluguel/editar/:id',
    component: EditarAluguelComponent
  },
  {
    path: 'remover/aluguel/:id',
    component: AluguelDeletarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
