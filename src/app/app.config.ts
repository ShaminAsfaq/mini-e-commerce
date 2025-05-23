import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';
import { AdminGuard } from './guards/admin.guard';
import { DashboardAccessGuard } from './guards/dashboard-access.guard';
import { AuthGuard } from './guards/auth.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore((injector) => getFirestore(injector.get(FirebaseApp))),
    provideAuth((injector) => getAuth(injector.get(FirebaseApp))),
    AdminGuard,
    DashboardAccessGuard,
    AuthGuard
  ]
};
