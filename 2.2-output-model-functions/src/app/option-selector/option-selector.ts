import { CommonModule } from '@angular/common';

import {
    Component,
    input,
    model,
    output,
} from '@angular/core';

@Component({
  selector: 'option-selector',
  imports: [CommonModule],
  templateUrl: './option-selector.html',
  styleUrl: './option-selector.css'
})
export class OptionSelector {
  options = input.required<string[]>();

  /**
   * Eg. of normal Output function.
   * Replacement of the traditional @Output decorator.
   */
  public outputVariable = output<string>();

  selected = model.required<string>();

  select(option: string) {
    this.selected.set(option);
    // Replacement of tradition Output Event Emission.
    this.outputVariable.emit(option);
  }
}
