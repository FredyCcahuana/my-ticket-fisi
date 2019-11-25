import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../services/evento.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent implements OnInit {

  eventos: any[] = [];
  termino: string;

  constructor(private eventoService: EventoService,private activatedRoute:ActivatedRoute,private router: Router) {
    this.eventoService.getEventos()
    .subscribe(
      res => {
        console.log(res);
        this.eventos = res;
      },
      err => console.log(err)
    )
   }
  ngOnInit() {    
  }
  selectEvento(id: string){
    this.router.navigate(['/evento', id]);
  }

}



