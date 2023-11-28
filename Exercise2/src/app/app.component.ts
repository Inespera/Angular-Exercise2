import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [CommonModule, RouterOutlet],
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;
  operation: string = 'add'; // Default operation
  result: number | null = null;
  history: Array<{ time: string, operation: string, result: number }> = [];

  performCalculation(): void {
    switch (this.operation) {
      case 'add':
        this.result = this.num1 + this.num2;
        break;
      case 'subtract':
        this.result = this.num1 - this.num2;
        break;
      case 'multiply':
        this.result = this.num1 * this.num2;
        break;
      case 'divide':
        this.result = this.num1 / this.num2;
        break;
      default:
        this.result = null;
}
this.addToHistory();
  }

  addToHistory(): void {
    const currentTime = new Date().toLocaleTimeString();
    this.history.push({
      time: currentTime,
      operation: this.operation,
      result: this.result || 0
    });
  }

  clearHistory(index: number): void {
    this.history.splice(index, 1);
  }
  title = 'Exercise2';
}

@NgModule({
  declarations: [],
  imports: [CommonModule,FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }



