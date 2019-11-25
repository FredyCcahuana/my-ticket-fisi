import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EventoService } from '../../services/evento.service';
import { TicketService } from '../../services/ticket.service';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-register-evento',
  templateUrl: './register-evento.component.html',
  styleUrls: ['./register-evento.component.css']
})
export class RegisterEventoComponent implements OnInit {

  eventoSelected: string | ArrayBuffer;
  ticketSelected: string | ArrayBuffer;
  ticketSelected1: string | ArrayBuffer;
  ticketSelected2: string | ArrayBuffer;
  fileEvento: File;
  fileTicket: File;
  fileTicket1: File;
  fileTicket2: File;
  // evento que se registrara
  evento: any = {};
  // evento que se registrara
  ticket: any = {};
  ticket1: any = {};
  ticket2: any = {};
  constructor(private eventoService: EventoService, private ticketService: TicketService, private router: Router) { }

  ngOnInit() {
  }
  // para guardar imagen te evento
  onEventoSelected(event: HtmlInputEvent): void {
    // cada vez que se suba una foto
    if (event.target.files && event.target.files[0]) {
      this.fileEvento =  event.target.files[0] as File;
      // image preview
      const reader = new FileReader();
      // mostrar la imagen que se guardoy cambiar por la foto actual
      reader.onload = e => this.eventoSelected = reader.result;
      reader.readAsDataURL(this.fileEvento);
    } 
  }
   // para guardar imagen de ticket
   onTicketSelected(event: HtmlInputEvent): void {
    // cada vez que se suba una foto
    if (event.target.files && event.target.files[0]) {
      this.fileTicket =  event.target.files[0] as File;
      // image preview
      const reader = new FileReader();
      // mostrar la imagen que se guardoy cambiar por la foto actual
      reader.onload = e => this.ticketSelected = reader.result;
      reader.readAsDataURL(this.fileTicket);
    }
  }
    // para guardar imagen de ticket
    onTicketSelected1(event: HtmlInputEvent): void {
      // cada vez que se suba una foto
      if (event.target.files && event.target.files[0]) {
        this.fileTicket1 =  event.target.files[0] as File;
        // image preview
        const reader = new FileReader();
        // mostrar la imagen que se guardoy cambiar por la foto actual
        reader.onload = e => this.ticketSelected1 = reader.result;
        reader.readAsDataURL(this.fileTicket1);
      }
    }
      // para guardar imagen de ticket
      onTicketSelected2(event: HtmlInputEvent): void {
        // cada vez que se suba una foto
        if (event.target.files && event.target.files[0]) {
          this.fileTicket2 =  event.target.files[0] as File;
          // image preview
          const reader = new FileReader();
          // mostrar la imagen que se guardoy cambiar por la foto actual
          reader.onload = e => this.ticketSelected2 = reader.result;
          reader.readAsDataURL(this.fileTicket2);
        }
      }
  uploadEvento() {
    this.eventoService
      .createEvento(this.evento, this.fileEvento)
      .subscribe(
        res => {
          console.log(res);
          //this.router.navigate(['/photos'])
        },
        err => console.log(err)
      );
    return false;
  }
  uploadTicket() {
    this.ticketService
      .createTicket(this.ticket, this.fileTicket)
      .subscribe(
        res => {
          console.log(res);
          //this.router.navigate(['/photos'])
        },
        err => console.log(err)
      );
    return false;
  }
  uploadTicket1() {
    this.ticketService
      .createTicket(this.ticket1, this.fileTicket1)
      .subscribe(
        res => {
          console.log(res);
          //this.router.navigate(['/photos'])
        },
        err => console.log(err)
      );
    return false;
  }
  uploadTicket2() {
    this.ticketService
      .createTicket(this.ticket2, this.fileTicket2)
      .subscribe(
        res => {
          console.log(res);
          //this.router.navigate(['/photos'])
        },
        err => console.log(err)
      );
    return false;
  }
}
