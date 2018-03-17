import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  trappedBoxes = ['Trapped 1', 'Trapped 2'];

  add(): void {
    this.trappedBoxes.push('New trapped');
  }
}
