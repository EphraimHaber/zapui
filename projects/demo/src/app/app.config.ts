import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ZapConfig, ZapTheme, provideZapOptions } from 'zap';

import { routes } from './app.routes';

const ngxConfig: ZapConfig = {
  theme: localStorage.getItem('zapdemo-theme') as 'light' | 'dark',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideZapOptions(ngxConfig),
  ],
};
