import { bootstrapApplication } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { loadTranslations } from '@angular/localize';
import { AppComponent } from './app/app.component';

import localeFa from '@angular/common/locales/fa';
import localeJa from '@angular/common/locales/ja';

registerLocaleData(localeFa);
registerLocaleData(localeJa);

// Initialize the application with the desired locale
const appLang = localStorage.getItem('locale') || 'en'; // Default to 'en'

initLanguage(appLang)
  .then(() => bootstrapApplication(AppComponent, {
    providers: [
      {
        provide: LOCALE_ID,
        useValue: appLang
      },
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
    ]
  }))
  .catch((err) => console.error(err));

// Function to initialize the locale
async function initLanguage(locale: string): Promise<void> {
  if (locale === 'en') {
    // Default behavior, no changes needed
    return;
  }

  // Load JSON translation file for the locale
  const translations = await fetch(`/assets/i18n/${locale}.json`).then((res) => res.json());

  // Initialize translations
  loadTranslations(translations);
  $localize.locale = locale;

    // Set direction dynamically
    setDirection(locale.startsWith('fa') ? 'rtl' : 'ltr');
  }
  
  // Function to set the `dir` attribute on the HTML element
  function setDirection(direction: 'ltr' | 'rtl') {
    document.documentElement.setAttribute('dir', direction);
}
