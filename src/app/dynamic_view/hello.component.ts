import { Input } from '@angular/core';
import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div>Dynamic Hello comp Name : {{name}}</div>`,
})
export class HelloComponent {
  @Input() name: string;
  setval() {
    
  }
}
