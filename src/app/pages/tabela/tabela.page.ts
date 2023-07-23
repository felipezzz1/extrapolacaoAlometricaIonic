import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.page.html',
  styleUrls: ['./tabela.page.scss'],
})
export class TabelaPage implements OnInit {
  animais : any;
  animaisMod : any;
  constructor(private router: Router) { 
    this.animais = [
      {
        tipo : "Passeriformes e beija-flor",
        kConstante : "129"
      },
      {
        tipo : "Não passeriformes",
        kConstante : "78 - 79"
      },
      {
        tipo : "Placentários",
        kConstante : "70"
      },
      {
        tipo : "Marsupiais e xenathra", 
        kConstante: "49"
      },
      {
        tipo : "Reptéis",
        kConstante : "10"
      }];
    this.animaisMod = [
      {
        modelo:"Gato",
        peso: "5"
      },
      {
        modelo:"Cão",
        peso: "10"
      },
      {
        modelo:"Humano",
        peso: "70"
      },
      {
        modelo:"Suíno",
        peso: "100"
      },
      {
        modelo:"Cavalo",
        peso: "500"
      },
      {
        modelo:"Boi",
        peso: "500"
      }
    ]
  }

  ngOnInit() {
  }

  irParaCalcular(){
    this.router.navigate(["/teste"])
  };
}
