import {
  ChangeDetectorRef,
  Component,
  ChangeDetectionStrategy,
  DoCheck,
  OnInit,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-parent1></app-parent1>
  <h3>Dynamic Component</h3> 
  <dynamic-app></dynamic-app> `,
})
export class AppComponent implements DoCheck {
  constructor() {}
  ngDoCheck() {}
}
