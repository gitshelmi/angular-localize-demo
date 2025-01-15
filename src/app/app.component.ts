import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
constructor(){
  this.greeting = this.getLocalizedGreeting();
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
