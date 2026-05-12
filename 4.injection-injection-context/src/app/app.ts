import { Component, signal } from '@angular/core';

import { CounterComponent } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public readonly showCounter = signal(false);

  toggleCounter() {
    this.showCounter.update(v => !v);
  }
}
