import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BodyComponent } from './shared/components/body/body.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { ListaDeseosComponent } from './shared/components/lista-deseos/lista-deseos.component';
import { EventoComponent } from './shared/components/evento/evento.component';
import { ResultadosBusquedaComponent } from './shared/components/resultados-busqueda/resultados-busqueda.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    CardsComponent,
    ListaDeseosComponent,
    EventoComponent,
    ResultadosBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
