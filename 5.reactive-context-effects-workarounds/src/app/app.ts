import {
  Component,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public readonly x = signal(10);

  public readonly isXLarge = signal(false);

  constructor() {
    effect(() => {
      if (this.x() > 12) {
        console.log('x is greater than 12');
        // this.x.update(val => val + 1,); // This is again an anti pattern and will result in infinite loop with the browser ultimately hanging up.
      }

      this.isXLarge.set(true); // This is an anti pattern and should not be done. Even though Angular now (with Angular 19+) allows you to do it.
    });
  }

  public incrementXOnButtonClick(): void {
    this.x.update( val => val + 1,);
  }
}
