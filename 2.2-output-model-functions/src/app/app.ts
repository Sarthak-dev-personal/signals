import { Component, signal } from '@angular/core';
import { RATES } from './currency-converter/rates';
import { CurrencyConverter } from "./currency-converter/currency-converter";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OptionSelector } from "./option-selector/option-selector";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyConverter, ReactiveFormsModule, OptionSelector],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly currencies = Object.keys(RATES);

  /*   */
  readonly currency = signal('GBP');
  /*   */

  amount = new FormControl(100);

  refreshData() {
    console.log('refreshData');
  }

  public logOutputVariable(option: string): void {
    console.log(option);
  }
}
