import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQ_DATA } from '../../data/edlo-data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqItems = FAQ_DATA;
  openFaqId = signal<string | null>(this.faqItems[0].id);

  toggleFaq(id: string) {
    if (this.openFaqId() === id) {
      this.openFaqId.set(null);
    } else {
      this.openFaqId.set(id);
    }
  }

  isFaqOpen(id: string): boolean {
    return this.openFaqId() === id;
  }
}
