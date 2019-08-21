import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num1: number;
  num2: number;
  option: number = 1;
   result : number;      

  title = 'protactorDemo';

  ChangingValue(event) {

    console.log(event);


  }
  Perform(){

    if (this.num1 && this.num2) {
      if (this.option == 1) {
        this.result =  this.num1 + this.num2;
      }
      else if (this.option == 2) {
        this.result =  this.num1 * this.num2
      }
      else if (this.option == 3) {
        this.result =  this.num1 - this.num2
      }
      else
        this.result =  this.num1 / this.num2

        console.log(this.result);
        
    }
  }

}
