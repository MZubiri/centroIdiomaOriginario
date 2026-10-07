import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PREGUNTAS_SIMULADOR_DATA } from '../../data/edlo-data';
import { PreguntaSimulador } from '../../models/edlo.model';

@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.scss'
})
export class SimuladorComponent {
  preguntas = PREGUNTAS_SIMULADOR_DATA;
  currentIndex = signal<number>(0);
  selectedOptionId = signal<string | null>(null);
  hasAnswered = signal<boolean>(false);
  score = signal<number>(0);
  isCompleted = signal<boolean>(false);

  get currentQuestion(): PreguntaSimulador {
    return this.preguntas[this.currentIndex()];
  }

  selectOption(optionId: string) {
    if (this.hasAnswered()) return;
    this.selectedOptionId.set(optionId);
  }

  submitAnswer() {
    if (!this.selectedOptionId() || this.hasAnswered()) return;

    this.hasAnswered.set(true);
    const chosen = this.currentQuestion.options.find(o => o.id === this.selectedOptionId());
    if (chosen && chosen.isCorrect) {
      this.score.update(s => s + 1);
    }
  }

  nextQuestion() {
    if (this.currentIndex() < this.preguntas.length - 1) {
      this.currentIndex.update(i => i + 1);
      this.selectedOptionId.set(null);
      this.hasAnswered.set(false);
    } else {
      this.isCompleted.set(true);
    }
  }

  restart() {
    this.currentIndex.set(0);
    this.selectedOptionId.set(null);
    this.hasAnswered.set(false);
    this.score.set(0);
    this.isCompleted.set(false);
  }
}
