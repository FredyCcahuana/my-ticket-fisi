import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../services/evento.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
  
})
export class EventoComponent implements OnInit {
  id: string;
  evento: Evento;
  constructor(private eventoService: EventoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.eventoService.getEvento(this.id)
        .subscribe(
          res => {
            this.evento = res;
          },
          err => console.log(err)
        )
    });
  }

}
export interface Evento {
  _id?: string;
  title: string;
  description: string;
  adicional: string;
  categoria: string;
  fechaInicio: string;
  fechaFinal: string;
  imagePath: string;
}

