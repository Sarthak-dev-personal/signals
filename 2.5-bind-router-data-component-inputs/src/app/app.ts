import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2.5-bind-router-data-component-inputs');

  public names = signal([
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
  ])
}
