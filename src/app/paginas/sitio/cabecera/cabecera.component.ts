import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.min.css']
})
export class CabeceraComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  abrirMenu() {
    let boton = document.querySelector('.burger');
    let navbar = document.getElementById('navbar');
    boton.classList.toggle('is-active')
    navbar.classList.toggle('is-active');
  }

}
