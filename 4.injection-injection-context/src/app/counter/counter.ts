import {
    Component,
    DestroyRef,
    effect,
    EffectRef,
    inject,
    Injector,
    signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
})
export class CounterComponent {
  readonly counter = signal(0);

  // 1. Inject the destroyRef here
  // 2. Inject the injector here
  private readonly destroyRef = inject(DestroyRef);
  private readonly injectorRef = inject(Injector);

  private effectRef: EffectRef | null = null;

  constructor() {
    const int = setInterval(() => {
      this.counter.update(v => v + 1);
    }, 1000);

    // 3. Use the destroyRef to clear the interval (use `clearInterval(int)`)
    this.destroyRef.onDestroy(() => clearInterval(int));
  }

  // 4. Create an effect when clicking a button
  startEffect() {
    if (this.effectRef) {
        return;
    }

    this.effectRef = effect(
        () => console.log(this.counter()),
        {
            injector: this.injectorRef,
        }
    );
  }

  // 5. Stop the effect when clicking another button
  stopEffect() {
    this.effectRef?.destroy();
    this.effectRef = null;
  }

}
