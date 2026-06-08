import { Component, contentChildren, ElementRef } from '@angular/core';
import { ManagedInputDirective } from "./managed-input.directive";

@Component({
  selector: 'input-manager',
  standalone: true,
  imports: [],
  templateUrl: './input-manager.html',
  styleUrl: './input-manager.css'
})
export class InputManager {

  // add a proper content query (hint, use the ManagedInputDirective)
  managedDirectiveChildren = contentChildren(ManagedInputDirective);

  clearAll() {
    // use the content query to clear all inputs
    this.managedDirectiveChildren().forEach(
        directive => directive.inputElement.value = '',
    );
  }

}
