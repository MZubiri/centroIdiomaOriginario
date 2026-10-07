import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-notice-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notice-banner.component.html',
  styleUrl: './notice-banner.component.scss'
})
export class NoticeBannerComponent {
  langService = inject(LanguageService);
  t = this.langService.t;
}
