import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  public isLogging:boolean;
  public headerH1: string;
  public links: object[];
  private stateLinks: object;
  constructor(private authService: AuthService) { 
    this.headerH1 = "stk2";

  }
  logout(){
    this.authService.setLogout();
  }

  ngOnInit(): void {
    this.isLogging = this.authService.isLogging;
    console.log("[MainHeaderComponent] ", this.isLogging);
    this.stateLinks =  {
      linksLoggedIn: [{ name: 'Tienda', path: '/' }],
      linksLoggedOut: [{ name: 'Tienda', path: '/' }, { name: 'Ingresar', path: '/login' }, 
        { name: 'Registrarse', path: '/register' }],
      linksLoggedInAdmin: [{ name: 'Alta de productos', path: '/push' }]
    }
    if (this.isLogging === false){
      this.links=this.stateLinks['linksLoggedOut'];
    }
    else{
      this.links=this.stateLinks['linksLoggedIn'];
    }
  }

  ngDoCheck(): void {
    this.isLogging = this.authService.isLogging;
    if (this.isLogging === false){
      this.links=this.stateLinks['linksLoggedOut'];
    }
    else{
      this.links=this.stateLinks['linksLoggedIn'];
    }

  }
}
