import {
  ChangeDetectorRef,
  Component,
  ChangeDetectionStrategy,
  DoCheck,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'test-do-check',
  template: `
      <div [innerHtml]="obj.changer"></div>
   `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestcompComponent implements DoCheck, OnInit {
  @Input() public obj: any;

  private _oldValue: number = 1;

  constructor(private _changeRef: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      this.obj.changer += 1;
      //this._changeRef.detectChanges();
      this._changeRef.markForCheck();
    }, 1000);
  }

  ngDoCheck() {
    if (this._oldValue !== this.obj.changer) {
      this._oldValue = this.obj.changer;
      console.log('in child' + this._oldValue);
      //disable this line to see the counter not moving
      //this._changeRef.detectChanges();
      this._changeRef.markForCheck();
    }
  }
}
