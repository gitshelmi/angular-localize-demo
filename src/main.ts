import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useFactory: (locale: string) => {
        switch (locale) {
          case 'fa-IR':
          case 'fa':
            return 'IRR'; // Iranian Rial
          case 'ja-JP':
          case 'ja':
            return 'JPY'; // Japanese Yen
          default:
            return 'USD'; // Default to US Dollar
        }
      },
      deps: [LOCALE_ID],
    },
  ],
}).catch((err) => console.error(err));
