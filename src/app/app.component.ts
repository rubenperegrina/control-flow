import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  show = false;
  cars: { name: string; color: string }[] = [];

  loadCars() {
    this.cars = [
      { name: 'Honda', color: 'red' },
      { name: 'Honda', color: 'red' },
      { name: 'Honda', color: 'red' },
    ]
  }
}
