import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// para que traega los servicios de el signup,signin
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // usuario que se registra
  user: any = {};
  // usuario que ingresar login 
  userI: any = {};
  // usuario que guarda los datos
  userd: any = {};
  constructor(private authService: AuthService, private router:Router,private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.params.subscribe(params => {
      console.log(params['id']);
      this.userd = JSON.parse(localStorage.getItem('savedUser'));
    });
  }
  ngOnInit() {
  }
  
  salir(){
    this.authService.logout();
  }
buscadorEvento(termino: string) {
  console.log(termino);
  this.router.navigate( ['/resultado-busqueda', termino] );
}
  signUp() {
    this.authService.signUpUser(this.user)
    // respuesta del servidor
      .subscribe(
        res => {
          console.log(res);
          // agregar un nuevo item de nombre token con valor que tenga res.token
          localStorage.setItem('token', res.token);
          localStorage.setItem('savedUser', JSON.stringify(res.savedUser));
          this.userd = JSON.parse(localStorage.getItem('savedUser'));
          this.router.navigate(['/home']);
        },
        // error
        err => console.log(err)
      );
  }
  signIp() {
    this.authService.signInUser(this.userI)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('savedUser', JSON.stringify(res.user));
        this.userd = JSON.parse(localStorage.getItem('savedUser'));
        this.router.navigate(['/home']);
      },
      err => console.log(err)
    );
  }
}


