import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputNumber: number = 0;
  amountOfNumber: number = 0;
  isWalker: boolean = false;
  isAsessement: boolean = false;
  isWalkerAndAsessement: boolean = false;
  showError: boolean = false;
  showNotApply: boolean = false;

  printNumbers(): void {
    this.amountOfNumber = this.inputNumber;
    this.checkInput();
  }

  checkInput() {
    this.initializeStatus();
    if (this.amountOfNumber < 1 || this.amountOfNumber > 200)
      this.showError = true;
    else {
      if ((this.amountOfNumber % 5) == 0 && (this.amountOfNumber % 3) == 0) {
        this.isWalkerAndAsessement = true;
      } else if ((this.amountOfNumber % 5) == 0) {
        this.isAsessement = true;
      } else if ((this.amountOfNumber % 3) == 0) {
        this.isWalker = true;
      } else {
        this.isWalkerAndAsessement = false;
        this.isAsessement = false;
        this.isWalker = false;
        this.showNotApply = true;
      }
    }
  }

  private initializeStatus(): void {
    this.showError = false;
    this.isWalkerAndAsessement = false;
    this.isAsessement = false;
    this.isWalker = false;
    this.showNotApply = false;
  }
}
