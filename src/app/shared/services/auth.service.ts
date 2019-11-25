import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // lugar donde esta el servidor
  private URL: string;
  constructor(private http: HttpClient, private router: Router) {
    this.URL = 'http://localhost:5000/api';
   }

  signUpUser(user: any) {
    return this.http.post<any>(this.URL + '/auth/signup', user);
  }
  signInUser(user: any) {
    return this.http.post<any>(this.URL + '/auth/signin', user);
  }
  // si existe el token true o si no existe false
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  // eliminar el token
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('savedUser');
    this.router.navigate(['/home']);
  }
  // obtiene el token
  getToken() {
    return localStorage.getItem('token');
  }
}
