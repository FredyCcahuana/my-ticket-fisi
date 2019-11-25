import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  // lugar donde esta el servidor
  private URL: string;
  eventos: any[] = [];
  constructor(private http: HttpClient) { 
    this.URL = 'http://localhost:5000/api/eventos';

  }
  // title: string, description: string, adicional: string, categoria: string,fechaInicio:string,fechaFinal: string
  // registrar los eventos
  createEvento(evento:any, photo: File) {
    const fd = new FormData();
    fd.append('title', evento.title);
    fd.append('description', evento.description);
    fd.append('adicional', evento.adicional);
    fd.append('categoria', evento.categoria);
    fd.append('fechaInicio', evento.fechaInicio);
    fd.append('fechaFinal', evento.fechaFinal);
    fd.append('image', photo);
    return this.http.post(this.URL, fd);
  }
  getEventos() {
    return  this.http.get<Evento[]>(this.URL);
  }
 getEvento(id: string){
  return this.http.get<Evento>(`${this.URL}/${id}`);
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
