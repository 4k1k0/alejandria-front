import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  sistemaOperativo: string;

  categorias: any[] = [
    {
      nombre: 'Browser',
      entradas: 19
    },
    {
      nombre: 'Chat',
      entradas: 2
    },
    {
      nombre: 'Torrents',
      entradas: 5
    }
  ];

  programas: any[] = [
    {
      nombre: 'Firefox',
      logo: 'https://bulma.io/images/placeholders/128x128.png',
      licencia: 'GNU',
      url: 'https://google.com',
      git: 'https://github.com',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      nombre: 'Chrome',
      logo: 'https://bulma.io/images/placeholders/128x128.png',
      licencia: 'GNU',
      url: 'https://google.com',
      git: 'https://github.com',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      nombre: 'Firefox',
      logo: 'https://bulma.io/images/placeholders/128x128.png',
      licencia: 'GNU',
      url: 'https://google.com',
      git: 'https://github.com',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  constructor( private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.sistemaOperativo = params['id'];
    });
  }

}
