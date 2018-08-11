import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHelloComponent } from './app.hello';

@NgModule({
  declarations: [
    AppComponent,
    AppHelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppHelloComponent]
})
export class AppModule { }
