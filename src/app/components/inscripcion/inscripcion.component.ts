import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

export interface FormSubmission {
  nombres: string;
  apellidos: string;
  dni: string;
  telefono: string;
  email: string;
  programa: string;
  lengua: string;
  modalidad: string;
  mensaje?: string;
}

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.scss'
})
export class InscripcionComponent {
  langService = inject(LanguageService);
  t = this.langService.t;

  programasDisponibles = [
    'Nivel Básico',
    'Nivel Intermedio',
    'Nivel Avanzado',
    'Preparación Especializada EDLO (MINEDU)'
  ];

  lenguasDisponibles = [
    'Quechua Chanka',
    'Quechua Cusco - Collao',
    'Quechua Áncash / Central',
    'Aymara',
    'Shipibo-Konibo',
    'Ashaninka',
    'Awajún'
  ];

  modalidadesDisponibles = [
    'Virtual Sincrónico (Clases en Vivo)',
    'Virtual Asincrónico (A tu ritmo)',
    'Intensivo Fines de Semana'
  ];

  formData: FormSubmission = {
    nombres: '',
    apellidos: '',
    dni: '',
    telefono: '',
    email: '',
    programa: 'Nivel Básico',
    lengua: 'Quechua Chanka',
    modalidad: 'Virtual Sincrónico (Clases en Vivo)',
    mensaje: ''
  };

  isSubmitting = signal(false);
  isSuccess = signal(false);
  submittedData = signal<FormSubmission | null>(null);

  onSubmit(form: any) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }

    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submittedData.set({ ...this.formData });
      this.isSuccess.set(true);
    }, 600);
  }

  get whatsappUrl(): string {
    const data = this.submittedData() || this.formData;
    const isEn = this.langService.currentLang() === 'en';
    const msg = isEn
      ? `Hello, my name is ${data.nombres} ${data.apellidos} (ID: ${data.dni}). I would like to request enrollment and syllabus for ${data.programa} in ${data.lengua} (${data.modalidad}) at CENTRO DE IDIOMA ORIGINARIO.`
      : `Hola, mi nombre es ${data.nombres} ${data.apellidos} (DNI: ${data.dni}). Solicito información y vacante para el ${data.programa} en la lengua ${data.lengua} (${data.modalidad}) en el CENTRO DE IDIOMA ORIGINARIO.`;
    return `https://wa.me/51987654321?text=${encodeURIComponent(msg)}`;
  }

  closeModal() {
    this.isSuccess.set(false);
    this.formData = {
      nombres: '',
      apellidos: '',
      dni: '',
      telefono: '',
      email: '',
      programa: 'Nivel Básico',
      lengua: 'Quechua Chanka',
      modalidad: 'Virtual Sincrónico (Clases en Vivo)',
      mensaje: ''
    };
  }
}
