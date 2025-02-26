import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ZapConfig, ZapTheme, provideZapOptions } from 'zap';

import { routes } from './app.routes';

const ngxConfig: ZapConfig = {
  theme: localStorage.getItem('zapdemo-theme') as 'light' | 'dark',
  components: {
    "date-picker": {
      shape: 'curve'
    },
    "dp-calendar": {
      shape: 'curve'
    },
    "dp-calendar-select": {
      shape: 'curve'
    }
  }
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideZapOptions(ngxConfig),
  ],
};
