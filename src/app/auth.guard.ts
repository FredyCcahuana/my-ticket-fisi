import { Injectable } from '@angular/core';
// permiso para navegar dentro de angular
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
// utilza el authServices para ver si el usuario esta logeado o no
import { Observable } from 'rxjs';
// importar serviccio
import { AuthService } from './shared/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router ) {}


  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
