import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { timer } from 'rxjs';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'dynamic-app',
  templateUrl: './dynamic.html',
})
export class DynamicAppComponent implements AfterViewInit {
  name: string;
  constructor() {
    this.name = 'Angular';
  }
  @ViewChild(HelloComponent, { static: true }) hello: HelloComponent;

  @ViewChild('pRef', { static: true }) pRef: ElementRef;
  @ViewChild('content', { static: false })
  private content: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef, static: false })
  private vc: ViewContainerRef;

  ngOnInit() {
    this.hello.setval();
    //console.log('Hello ', this.hello.name);
    //console.log(this.pRef.nativeElement.innerHTML);
    //this.pRef.nativeElement.innerHTML = 'DOM updated succesfully!!!';
    //this.vc.createEmbeddedView(this.content, {});
  }
  ngAfterViewInit() {
    //console.log(this.vc);
    //console.log(this.content);
    //console.log(this.pRef.nativeElement.innerHTML);
    //this.vc.createEmbeddedView(this.content, {});
    this.pRef.nativeElement.innerHTML = 'DOM updated succesfully!!!';
  }
  create() {
    //const view = this.content.createEmbeddedView({});
    //this.vc.insert(view);
    this.vc.createEmbeddedView(this.content, {});
  }
}
