import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule {
  constructor(applicationRef: ApplicationRef) {
    const originalTick = applicationRef.tick;
    applicationRef.tick = function() {
      const  before = window.performance.now();
      const retValue = originalTick.apply(this, arguments);
      const after = window.performance.now();
      const runTime = after - before;
      console.log('CHANGE DETECTION TIME' , runTime);
    };
  }
}
