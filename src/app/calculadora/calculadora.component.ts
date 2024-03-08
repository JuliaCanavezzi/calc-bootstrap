import { Component } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number=0;
  num2: number=0;
  result : number =0;

  somar(){
    this.result = this.num1 + this.num2;
  }
  sub(){
    this.result = this.num1 - this.num2;
  }
  porce(){
    this.result = this.num1 % this.num2;
  }
  med(){
    this.result = (this.num1 + this.num2)/2;

  }
  mult(){
    this.result = this.num1 * this.num2;
  }

  div(){
    if(this.num2 == 0){
      alert("Não é possível DIVIDIR por ZERO!");
    }
    else{
      this.result=this.num1/this.num2;
    }
  }

  limpar(){
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
    this.result = 0;
    this.result = 0;
    this.result = 0;
  }
}
