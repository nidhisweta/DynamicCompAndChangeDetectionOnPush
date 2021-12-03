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
  name: string;
  myvalue: number = 0;
  public object1: any = {
    changer: 1,
  };
  constructor() {
    this.name = 'Angular';
    //this.object1.changer=this.myvalue;
  }
  ngDoCheck() {
    console.log('in App' + this.object1.changer);
    //this.object1.changer=this.object1.changer+1
  }
}
