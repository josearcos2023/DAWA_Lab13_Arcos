import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListarCategoriaComponent } from './componentes/listar-categoria/listar-categoria.component';
import { CrearCategoriaComponent } from './componentes/crear-categoria/crear-categoria.component';

const routes: Routes = [
  {path: '', component:ListarProductoComponent},
  {path: 'crear-producto', component:CrearProductoComponent},
  {path: 'editar-producto/:id', component:CrearProductoComponent},
  {path: 'crear-categoria', component:CrearCategoriaComponent},
  {path: 'listar-categoria', component:ListarCategoriaComponent},
  {path: 'editar-categoria/:id', component:CrearCategoriaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
