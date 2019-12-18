import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { BuscadorComponent } from './buscador/buscador.component';


const routes: Routes = [
{path:'', redirectTo: 'home', pathMatch:'full'}, 
{path: 'home', component: HomeComponent}, 
{path: 'lista', component: ListaComponent},
{path: 'buscador', component: BuscadorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
