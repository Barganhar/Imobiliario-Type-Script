import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/template/content/content.component';
import { HeaderComponent } from './components/template/header/header.component';

import { CadastrarCasaComponent } from './components/views/cadastrar-casa/cadastrar-casa.component';
import { ListarCasaComponent } from './components/views/listar-casa/listar-casa.component';
import { ListarClienteComponent } from './components/views/listar-cliente/listar-cliente.component';
import { CadastrarVendaComponent } from './components/views/cadastrar-venda/cadastrar-venda.component';
import { ListarVendaComponent } from './components/views/listar-venda/listar-venda.component';
import { ListarAluguelComponent } from './components/views/listar-aluguel/listar-aluguel.component';
import { CadastrarClienteComponent } from './components/views/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarAluguelComponent } from './components/views/cadastrar-aluguel/cadastrar-aluguel.component';
import { EditarClienteComponent } from './components/views/editar-cliente/editar-cliente.component';
import { EditarAluguelComponent } from './components/views/editar-aluguel/editar-aluguel.component';
import { EditarVendaComponent } from './components/views/editar-venda/editar-venda.component';
import { EditarCasaComponent } from './components/views/editar-casa/editar-casa.component';
import { ClienteDeletarComponent } from './components/views/cliente-deletar/cliente-deletar.component';
import { CasaDeletarComponent } from './components/views/casa-deletar/casa-deletar.component';
import { AluguelDeletarComponent } from './components/views/aluguel-deletar/aluguel-deletar.component';
import { VendaDeletarComponent } from './components/views/venda-deletar/venda-deletar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    CadastrarCasaComponent,
    CadastrarClienteComponent,
    ListarCasaComponent,
    ListarClienteComponent,
    CadastrarVendaComponent,
    CadastrarAluguelComponent,
    ListarVendaComponent,
    ListarAluguelComponent,
    CadastrarClienteComponent,
    EditarClienteComponent,
    EditarAluguelComponent,
    EditarVendaComponent,
    EditarCasaComponent,
    ClienteDeletarComponent,
    CasaDeletarComponent,
    AluguelDeletarComponent,
    VendaDeletarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
