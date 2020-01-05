import {Component} from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: 'app.simple.component.view.html'
})
export class SimpleComponent {
  message: string;
  name: string;

  constructor() {
    this.message = 'Hello Angular';
    this.name = '';
  }
  display(): void {
    this.message = 'Hello Angular the button is clicked.';
  }
}
