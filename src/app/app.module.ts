import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ListarCategoriaComponent } from './componentes/listar-categoria/listar-categoria.component';
import { CrearCategoriaComponent } from './componentes/crear-categoria/crear-categoria.component';

import { HttpClientModule } from '@angular/common/http';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { ListarClientesComponent } from './componentes/listar-clientes/listar-clientes.component';
import { CrearClientesComponent } from './componentes/crear-clientes/crear-clientes.component';
import { EditarClientesComponent } from './componentes/editar-clientes/editar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductoComponent,
    ListarCategoriaComponent,
    CrearCategoriaComponent,
    EditarProductoComponent,
    ListarClientesComponent,
    CrearClientesComponent,
    EditarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
