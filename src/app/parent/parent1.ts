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
  selector: 'app-parent1',
  template: `
    <div>
      <h2>ChangeDetection OnPush example : {{this.object1.changer}}</h2>
      <!--<input name="myval" type="text" [(ngModel)]="this.object1.changer" />-->
      <test-do-check [obj]=object1></test-do-check>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Parent1Component implements DoCheck {
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
    console.log('in parent' + this.object1.changer);
    //this.object1.changer=this.object1.changer+1
  }
}
