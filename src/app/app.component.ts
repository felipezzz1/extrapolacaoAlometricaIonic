import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Calculadora', url: '/teste', icon: 'calculator' },
    { title: 'Tabelas', url: '/tabela', icon: 'list' },
    { title: 'Informações', url: '/infos', icon: 'information-circle' },
  ];
  constructor() {}
}
