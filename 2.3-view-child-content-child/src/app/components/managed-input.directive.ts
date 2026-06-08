import { Directive, ElementRef, inject } from "@angular/core";

@Directive({
    selector: 'input[appManaged]', 
    standalone: true
})
export class ManagedInputDirective {
    private readonly elementRef = inject(ElementRef<HTMLInputElement>);

    public inputElement = this.elementRef.nativeElement;
}