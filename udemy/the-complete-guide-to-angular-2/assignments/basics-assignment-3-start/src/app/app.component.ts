import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayed: boolean = false;
  numberClicks: number = 0;
  logClicks: Array<String> = [];

  onDisplayDetails(): void {
    this.displayed = !this.displayed;
    this.numberClicks += 1;
    this.logClicks.push('Click ' + this.numberClicks);
  }
}
