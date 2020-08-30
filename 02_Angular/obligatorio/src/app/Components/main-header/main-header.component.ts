import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  public headerH1: string;
  public links: string[];
  constructor() { 
    this.headerH1 = "stk2";
    this.links = [ "Tienda", "Ingresar", "Registrarse", "Alta de productos"];
  }

  ngOnInit(): void {
  }

}
