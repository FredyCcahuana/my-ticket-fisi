import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../services/evento.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.css']
})
export class ListaDeseosComponent implements OnInit {

  eventos = [];
  constructor(private eventoService: EventoService,private router: Router) { }

  ngOnInit() {
    this.eventoService.getEventos()
    .subscribe(
      res => {
        console.log(res);
        this.eventos = res;
      },
      err => console.log(err)
    )
  }
  selectEvento(id: string){
    this.router.navigate(['/evento', id]);
  }

}
