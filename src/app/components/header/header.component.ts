import { Component, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  openEnrollment = output<void>();

  isMobileMenuOpen = signal(false);

  toggleMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMobileMenuOpen.set(false);
  }

  onEnrollClick(event?: Event) {
    if (event) event.preventDefault();
    this.closeMenu();
    this.openEnrollment.emit();
  }
}
