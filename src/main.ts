import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './features/app/app.component';
import { appConfig } from './features/app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
