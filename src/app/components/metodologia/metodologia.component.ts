import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-metodologia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metodologia.component.html',
  styleUrl: './metodologia.component.scss'
})
export class MetodologiaComponent {
  langService = inject(LanguageService);
  t = this.langService.t;
}
