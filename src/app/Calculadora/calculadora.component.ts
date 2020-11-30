import { Component } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styles: [`
  h1{
    color: blue;
  }
  `]
})

export class CalculadoraComponent {

  // OperadorA
  aOperator: number;

  // OperadorB
  bOperator: number;

  // resultado
  resultado: number;

  constructor(){
  }
  resultadoSuma(): void{
    this.resultado = this.aOperator + this.bOperator;
  }

}
