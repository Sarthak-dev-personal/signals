import {
  Component,
  OnDestroy,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnDestroy{
  public counter = 0;

  private timer: number;

  private intervalTimer: number;

  constructor(
    @Inject(ChangeDetectorRef)
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    this.setTimer();
    this.setChangeDetectionInterval();
  }

  /** @override */
  public ngOnDestroy(): void {
    clearTimeout(this.timer);
    clearInterval(this.intervalTimer);
  }

  public onButtonClick(): void {
    console.log("I Do nothing but just log in the console!");
  }

  private setTimer(): void {
    this.timer = setTimeout(() => {
      this.counter += 1;

      console.log(this.counter);
    }, 1000);
  }

  private setChangeDetectionInterval(): void {
    this.intervalTimer = setInterval(() => this.changeDetectorRef.detectChanges(), 5000);
  }
}
