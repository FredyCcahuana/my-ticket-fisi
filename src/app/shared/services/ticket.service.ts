import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

 
  // lugar donde esta el servidor
  private URL: string;
  constructor(private http: HttpClient) { 
    this.URL = 'http://localhost:5000/api/tickets';
  }
  // title: string, description: string, adicional: string, categoria: string,fechaInicio:string,fechaFinal: string
  // registrar los eventos
  createTicket(ticket: any, photo: File) {
    const fd = new FormData();
    fd.append('title', ticket.title);
    fd.append('nombreEntrada', ticket.nombreEntrada);
    fd.append('cantidad', ticket.cantidad);
    fd.append('precio', ticket.precio);
    fd.append('imageticket', photo);
    return this.http.post(this.URL, fd);
  }
}

export interface Ticket {
  _id?: string;
  title: string;
  nombreEntrada: string;
  cantidad: string;
  precio: string;
  imageticketPath: string;
}
