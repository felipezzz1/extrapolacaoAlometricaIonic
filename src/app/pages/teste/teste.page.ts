import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {
  resultadoTMBAlvo : number;
  resultadoTMBModelo : number;
  resultadoTMEAlvo : number;
  resultadoTMEModelo : number;
  doseTotalModelo : number;
  doseTotalAlvo : number;
  intervaloHorasAlvo : number;
  intervaloHorasModelo : number;
  intervaloDias : number;
  animalAlvo : string;
  dose : number;
  kAnimalAlvo : number;
  pesoAnimalAlvo : number;
  kAnimalModelo : number;
  pesoAnimalModelo : number;

  constructor(private alertController: AlertController, private router: Router) { 
  }

  ngOnInit() {
  }

  calcularTaxaMetabolica(){
    if(this.validar(this.kAnimalAlvo) && this.validar(this.pesoAnimalAlvo) && this.validar(this.kAnimalModelo) && this.validar(this.pesoAnimalModelo)){
      console.log(this.kAnimalAlvo + " " + this.pesoAnimalAlvo + " " + this.kAnimalModelo + " " + this.pesoAnimalModelo);
      this.presentAlert("Extrapolação alométrica", "Sucesso" ,"Calculo efetuado");
      this.resultadoTMBAlvo = this.kAnimalAlvo * ( this.pesoAnimalAlvo ** 0.75);
      this.resultadoTMBModelo = this.kAnimalModelo * (this.pesoAnimalModelo ** 0.75);
      this.resultadoTMEAlvo = this.kAnimalAlvo * ( this.pesoAnimalAlvo ** -0.25);
      this.resultadoTMEModelo = this.kAnimalModelo * (this.pesoAnimalModelo ** -0.25);
    }else{
      this.presentAlert("Extrapolação alométrica", "Erro", "Todos os campos são obrigatórios");
    }
  }

  calcularMedicamentos(){
    if(this.validar(this.resultadoTMBAlvo) && this.validar(this.resultadoTMBModelo) && this.validar(this.resultadoTMEAlvo) && this.validar(this.resultadoTMEModelo)
    && this.validar(this.dose) && this.validar(this.intervaloHorasModelo)){
      console.log(this.resultadoTMBAlvo + " " + this.resultadoTMBModelo + " " + this.resultadoTMEAlvo + " " + this.resultadoTMEModelo);
      this.presentAlert("Extrapolação alométrica", "Sucesso" ,"Calculo efetuado");
      this.doseTotalModelo = this.pesoAnimalModelo * this.dose;
      this.doseTotalAlvo = (this.doseTotalModelo / this.resultadoTMBModelo) * this.resultadoTMBAlvo;
      this.intervaloHorasAlvo = this.resultadoTMEModelo * (this.intervaloHorasModelo / this.resultadoTMEAlvo);
      this.intervaloDias = this.intervaloHorasAlvo / 24;
    }else{
      this.presentAlert("Calculo", "Erro", "Todos os campos são obrigatórios");
    }
  }

  private validar( campo : any) : boolean{
    if(!campo){
      return false;
    }
    return true;
  }

  async presentAlert(header : string, subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.resultadoTMBAlvo = null;
    this.resultadoTMBModelo = null;
    this.resultadoTMEAlvo = null;
    this.resultadoTMEModelo = null;
    this.animalAlvo = null;
    this.kAnimalAlvo = null;
    this.pesoAnimalAlvo = null;
    this.kAnimalModelo = null;
    this.pesoAnimalModelo = null;
    this.doseTotalModelo = null;
    this.doseTotalAlvo = null;
    this.intervaloHorasAlvo = null;
    this.intervaloHorasModelo = null;
    this.intervaloDias = null;
    this.dose = null;
    
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 5);
  }

}
