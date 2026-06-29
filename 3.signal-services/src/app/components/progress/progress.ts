import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.html',
  styleUrl: './progress.css'
})
export class Progress {
  readonly value = input.required<number>();
  readonly max = input.required<number>();

  readonly ratio = computed(() => this.max() === 0 ? 0 : this.value() / this.max());
}
