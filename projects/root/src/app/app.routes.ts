import { Routes } from '@angular/router';
import { AuthComponent } from '@authentication/app.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@authentication/app.routes').then((m) => m.authRoutes),
  },
];
