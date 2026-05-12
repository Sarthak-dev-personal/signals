import {
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';

import {
  toObservable,
  toSignal,
} from '@angular/core/rxjs-interop';

import {
  interval,
  Subject,
  takeUntil,
} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // 1. Create an observable called number$ that emits an integer value every second
  public readonly number$ = interval(1000);

  // 2. Convert the observable to a signal called number from the number$ observable.
  public readonly number = toSignal(this.number$, {
    /**
     * Signal needs to have an initial value and an observable doesn't always start emitting an initial value immediately.
     * So, we manually assign an initial value in order to prevent the type of number signal to be set to Number | Undefined.
     */
    // initialValue: 0,
    /**
     * The below option is set to false, when we don't provide an initialValue, and
     * disallow Angular to synchonously check for the value to be emitted by the Observable.
     * This again results in the type being set to Number | Undefined and you'll have to manually handle the undefined
     * case everywhere you use this particular signal. The most ideal way is to use the initialValue option.
     */
    //requireSync: false,
  });

  // 3. Add an element in the UI that displays the value of the 'number' signal.


  readonly myName = signal('John Doe');
  // 4. Create an observable called myName$ from the "myName" signal
  public readonly myName$ = toObservable(this.myName);

  private readonly ngDestroyed$ = new Subject<Boolean>();

  // private readonly injectorRef = inject(someToken);

  // 5. Subscribe to myName$ and log the value to the console so that you log every name change from the UI.

  constructor() {
    this.myName$.pipe(
      takeUntil(this.ngDestroyed$),
    ).subscribe(
      name => console.log(name),
    );
  }


  ngOnInit() {
    // 6. challenge - repeat steps 1 - 4 in this method

    /* const number2 = toSignal(this.number$, {
      /**
       * To do this in ngOninit, we'll need to pass the injector, since this can be executed only inside an injection context.
      // injector: this.injectorRef,
    }); */

    // console.log(number2$);

    const number2$ = toObservable(this.number);

    number2$.subscribe(number => console.log(number));
  }

  public ngDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.complete();
  }
}
