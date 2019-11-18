import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ListaDeseosComponent } from './shared/components/lista-deseos/lista-deseos.component';
import { EventoComponent } from './shared/components/evento/evento.component';
import { ResultadosBusquedaComponent } from './shared/components/resultados-busqueda/resultados-busqueda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ListaDeseos', component: ListaDeseosComponent },
  { path: 'evento', component: EventoComponent },
  { path: 'resultado-busqueda', component: ResultadosBusquedaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
