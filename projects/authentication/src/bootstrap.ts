import { bootstrapApplication } from '@angular/platform-browser';
import { authConfig } from './app/app.config';
import { AuthComponent } from './app/app.component';

bootstrapApplication(AuthComponent, authConfig).catch((err) =>
  console.error(err)
);
