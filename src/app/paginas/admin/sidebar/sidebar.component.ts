import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.min.css']
})
export class SidebarComponent implements OnInit {

  elementosMenu: any[] = [
    {
      icono: 'algo',
      texto: 'Algo',
      url: 'ruta1'
    },
    {
      icono: 'algo',
      texto: 'Algo',
      url: 'ruta1'
    },
    {
      icono: 'algo',
      texto: 'Algo',
      url: 'ruta1'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
