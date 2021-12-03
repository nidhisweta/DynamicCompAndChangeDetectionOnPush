import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Parent1Component } from './parent/parent1';
import { TestcompComponent } from './test/testcomp';
import { DynamicAppComponent } from './dynamic_view/dynamic';
import { HelloComponent } from './dynamic_view/hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    Parent1Component,
    TestcompComponent,
    DynamicAppComponent,
    HelloComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
