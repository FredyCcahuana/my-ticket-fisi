import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// validacion de token para permiso entrar a una pagina especifica
import { AuthGuard } from './auth.guard';

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
import { HomeProveedorComponent } from './shared/components/home-proveedor/home-proveedor.component';


import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { RegisterEventoComponent } from './shared/components/register-evento/register-evento.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// MATERIAL 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
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
    ResultadosBusquedaComponent,
    HomeProveedorComponent,
    RegisterEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
