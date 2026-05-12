/* import {
  Component,
  Input,
  OnChanges,
} from '@angular/core';

import { RATES } from './rates';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.css', 
})

export class CurrencyConverter implements OnChanges {
  
  @Input({required: true})
  amount!: number;

  @Input({required: true})
  currency!: string;

  rate = 1;
  converted = 0;


  ngOnChanges(): void {
    this.rate = RATES[this.currency];
    this.converted = this.amount * this.rate;    
  }
}
 */

// Creating a replica of the above old Angular Code using the input signals approach.

import {
  Component,
  computed,
  input,
} from '@angular/core';

import { RATES } from './rates';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'currency-converter',
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.css',
  imports: [CommonModule],
})

export class CurrencyConverter {
  /**
   * Eg. of how to make input signal mandatory.
   * Replaces @Input() public amount! : number;
   */
  public amount = input.required<number>();

  /**
   * Eg. of a non-mandatory input signal with a default value.
   * Replacement of @Input() public currency = 'USD';
   */
  public currency = input('USD');

  /**
   * Eg. of a non-mandatory input signal.
   * Replacement of @Input() public currenct: String;
   */
  public defaultCurrentValue = input<string>();

  /**
   * Eg. of an input signal with an alias.
   * Replacement of @Input('sourceKey') public keyNameIWantToUseInthisComponent: Type
   */
  /* public inputSignalWithAlias = input.required<string>({
    alias: 'myComponentVariableName',
  }) */

  /**
   * Eg. of a non mandatory input signal with an alias.
   */
  public nonMandatoryInputSignalWithAlias = input(0, { alias: 'myComponentVariableName' })

  /**
   * Eg. of traditional setter based inputs in Angular.
   * Replacement of private _val = 0;
   * @Input() set value(v: string | number) {
   *  this._val = typeof v === 'string' ? parseInt(v) : v;
   * }
   */
  /* public value = input.required({
    transform: (v: string | number) => typeof v === 'string' ? parseInt(v) : v
  }); */

  /**
   * Replacement of deriving any logic in traditional setter based inputs where we calculated something to set the value.
   * Eg. @Input() set width(w: number) {
   *  this.area = w * this.height;
   * }
   */
  public converted = computed(() => this.amount() * RATES[this.currency()]);
}
