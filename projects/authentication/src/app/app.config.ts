import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { authRoutes } from './app.routes';

export const authConfig: ApplicationConfig = {
  providers: [provideRouter(authRoutes)],
};
