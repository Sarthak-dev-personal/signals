import { CommonModule } from '@angular/common';

import {
  Component,
  linkedSignal,
  signal,
} from '@angular/core';

import { PRODUCTS } from './products';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly products = signal<string[]>(['Apple', 'Banana', 'Cherry']);

  readonly selectedProduct = signal('Apple');

  /* 1. Create a simple linked signal that sets the selected product to the first
        product in the list., wheven the inventory changes */
  public readonly selectedProductSimpleSignature = linkedSignal<string>(() => this.products()[0]);
  

  /* 2. Change the `linkedSignal` so you use the second signature, supply an object 
        with source and computation properties */
  public readonly selectedProductElaboratedSignature = linkedSignal<string[], string>(
    {
      computation: products => products[0],
      source: this.products,
    }
  );

  /* 3. In the computation, use the previous value, to check if the selected product
        is still in the list, if not, set the selected product to the first product in the list */

    public readonly selectedProductWithComputationLogicSignal = linkedSignal<string[], string>({
      source: this.products,
      computation: (currentValue, previousValue) => {
        if (!previousValue) {
          return '';
        } else if (currentValue.includes(previousValue.value)) {
          return previousValue.value
        } else {
          return currentValue[0];
        }
      }
    });

  addProduct() {
    this.products.update(prods => [...prods, PRODUCTS[prods.length]]);
  }

  removeProduct() {
    this.products.update(prods => prods.slice(0, -1));
  }

  nextProduct() {
    this.selectedProduct.update(selected => {
      const index = this.products().indexOf(selected);
      return this.products()[(index + 1) % this.products().length];
    });
  }

  prevProduct() {
    this.selectedProduct.update(selected => {
      const index = this.products().indexOf(selected);
      return this.products()[(index - 1 + this.products().length) % this.products().length];
    });
  }
}
