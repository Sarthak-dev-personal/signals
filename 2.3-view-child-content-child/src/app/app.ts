import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputManager } from "./components/input-manager";
import { ManagedInputDirective } from "./components/managed-input.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputManager, ManagedInputDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // add a proper view query (hint, use the # reference string)
  public inputElementRef = viewChild.required('txtInput', {read: ElementRef});

  onSelect() {
    // use the view query to select the input
    // hint, use the 'select' method on the native element
    console.log(this.inputElementRef()?.nativeElement);
    this.inputElementRef().nativeElement.select();
    // this.inputElementRef().nativeElement.style['background-color'] = 'black';
  }
}
