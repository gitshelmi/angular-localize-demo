import { Component, DEFAULT_CURRENCY_CODE, Inject, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatExpansionModule
  ],
})
export class AppComponent {
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(DEFAULT_CURRENCY_CODE) public defaultCurrency: string) {
    this.greeting = this.getLocalizedGreeting();
    this.currentCurrency = this.defaultCurrency;
    this.locale = localStorage.getItem('locale') || locale || 'en'
  }

  // Function to handle locale change
  onLocaleChange(event: Event) {
    const target = event.target as HTMLSelectElement;

    if (target && target.value) {
      const newLocale = target.value;
      localStorage.setItem('locale', newLocale); // Save selected locale to localStorage
      window.location.reload(); // Reload the app to apply the new locale
    } else {
      console.error('Invalid event target or locale value.');
    }
  }

  today: Date = new Date();

  // Example amount for currency display
  amount: number = 12345.67;

  // Example currency code (can be dynamically set based on locale)
  currentCurrency: string = 'USD';

  // Example large number for formatting
  largeNumber: number = 9876543210;

  // Example item count for pluralization demo
  itemCount: number = 0;

  // Example data for gender-based message
    userName: string = 'John';
    userGender: 'male' | 'female' | 'other' = 'male';

  // Mocked product list
  products = [
    { name: 'Apple', price: 1.5 },
    { name: 'Banana', price: 0.9 },
    { name: 'Cherry', price: 2.0 }
  ];

  // Programmatic greeting
  greeting: string;
  
  getLocalizedGreeting(): string {
    const hour = new Date().getHours();

    if (hour < 12) {
      return $localize`:@@morning-greeting:Good morning!`;
    } else if (hour < 18) {
      return $localize`:@@afternoon-greeting:Good afternoon!`;
    } else {
      return $localize`:@@evening-greeting:Good evening!`;
    }
  }
}
