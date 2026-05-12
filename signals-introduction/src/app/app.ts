import {
  Component,
  computed,
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
  // 1. replace with a writeable signal with an initial value of 0
  public readonly firstNumber = signal<Number>(0); 

  // 2. replace with a writeable signal with an initial value of 0
  public readonly secondNumber = signal(0);

  // 3. replace with a computed signal that emits the sum of the first and second numbers
  public readonly sum = computed(() => this.firstNumber() + this.secondNumber(),);

  setSecondSignalTo10() {
    // 4. set the second number signal to 10
    this.secondNumber.set(10);
  }

  incrementFirstSignal() {
    // 5. increment the first number signal by 1 but only if it's less than 10
    this.firstNumber.update(
      value => value >= 10 ? value : value + 1,
    );
  }

  incrementBothSignals() {
    // 6. increment both number signals by 1 with a maximum of 10
    this.firstNumber.update(
      value => value >= 10 ? value : value + 1,
    );

    this.secondNumber.update(
      value => value >= 10 ? value : value + 1,
    );
  }


  constructor() {
    // 7. Define an effect that displays both signals to the console whenever any of them changes
    /**
     * Both the console logs will be executed even if there is change in just the first signal value.
     */
    effect(() => {
      console.log("The First Signal is:" , this.firstNumber());
      console.log("The Second Signal is:" , this.secondNumber());
    });
  }
}
