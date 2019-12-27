import {ApplicationRef} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {enableDebugTools} from '@angular/platform-browser';

platformBrowserDynamic().bootstrapModule(AppModule).then(moduleRef => {
  const applicationRef = moduleRef.injector.get(ApplicationRef);
  const componentRef = applicationRef.components[0];
  // allows to run `ng.profiler.timeChangeDetection();`
  enableDebugTools(componentRef);
}).catch(err => window['console'].error(err));
