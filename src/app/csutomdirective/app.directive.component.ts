import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  template: `
     <table class="table table-bordered table-striped">
        <tr>
          <td>
             <input type="radio" name="r" (click)="color='red'"> Red
          </td>
          <td>
             <input type="radio" name="r" (click)="color='blue'"> Blue
          </td>
          <td>
            <input type="radio" name="r" (click)="color='yellow'"> Yellow
          </td>
        </tr>
     </table>
     <hr>

     <div class="container" [setColor]="color">I am Div 1</div>
     <hr>
     <div class="container" [setColor]="color">I am Div 2</div>
     <hr>
     <div class="container" [setColor]="color">I am Div 3</div>
  `
})
export class DirectiveComponent implements OnInit {
  color: string;
  constructor() { }

  ngOnInit(): void { }
}

