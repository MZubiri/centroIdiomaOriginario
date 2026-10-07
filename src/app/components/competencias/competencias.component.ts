import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPETENCIAS_DATA } from '../../data/edlo-data';
import { Competencia } from '../../models/edlo.model';

@Component({
  selector: 'app-competencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competencias.component.html',
  styleUrl: './competencias.component.scss'
})
export class CompetenciasComponent {
  competencias = COMPETENCIAS_DATA;
  activeFilter = signal<'Todos' | 'Oral' | 'Escrito' | 'Integral'>('Todos');
  selectedCompetencia = signal<Competencia | null>(null);

  get filteredCompetencias(): Competencia[] {
    const filter = this.activeFilter();
    if (filter === 'Todos') {
      return this.competencias;
    }
    return this.competencias.filter(c => c.focusArea === filter);
  }

  setFilter(filter: 'Todos' | 'Oral' | 'Escrito' | 'Integral') {
    this.activeFilter.set(filter);
  }

  openModal(item: Competencia) {
    this.selectedCompetencia.set(item);
  }

  closeModal() {
    this.selectedCompetencia.set(null);
  }
}
