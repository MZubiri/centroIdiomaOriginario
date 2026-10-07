import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIOS_DOCENTES_DATA } from '../../data/edlo-data';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.scss'
})
export class TestimoniosComponent {
  testimonios = TESTIMONIOS_DOCENTES_DATA;
}
