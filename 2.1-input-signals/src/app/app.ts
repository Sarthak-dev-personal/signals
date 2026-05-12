import { Component } from '@angular/core';
import { RATES } from './component/currency-converter/rates';
import { CurrencyConverter } from './component/currency-converter/currency-converter';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CurrencyConverter,
    ReactiveFormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly currencies = Object.keys(RATES);

  amount = new FormControl(100);
  currency = new FormControl('USD');


}
