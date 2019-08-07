import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path : '', component:MainComponent},
  { path : 'head', component:HeaderComponent},
  { path : 'cad_produto', component:CadProdutoComponent},
  { path : 'cad_usuario', component:CadUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
