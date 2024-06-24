import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListarCategoriaComponent } from './componentes/listar-categoria/listar-categoria.component';
import { ListarClientesComponent } from './componentes/listar-clientes/listar-clientes.component';
import { CrearCategoriaComponent } from './componentes/crear-categoria/crear-categoria.component';
import { CrearClientesComponent } from './componentes/crear-clientes/crear-clientes.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { EditarClientesComponent } from './componentes/editar-clientes/editar-clientes.component';

const routes: Routes = [
  {path: '', component:ListarProductoComponent},
  {path: 'crear-producto', component:CrearProductoComponent},
  {path: 'editar-producto/:id', component:EditarProductoComponent},
  {path: 'editar-cliente/:id', component:EditarClientesComponent},
  {path: 'crear-categoria', component:CrearCategoriaComponent},
  {path: 'crear-cliente', component:CrearClientesComponent},
  {path: 'listar-categoria', component:ListarCategoriaComponent},
  {path: 'listar-clientes', component:ListarClientesComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
