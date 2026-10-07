import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EdloComponent } from './pages/edlo/edlo.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { LenguasComponent } from './pages/lenguas/lenguas.component';
import { NosotrosPageComponent } from './pages/nosotros/nosotros-page.component';
import { NoticiasPageComponent } from './pages/noticias/noticias-page.component';
import { ContactoPageComponent } from './pages/contacto/contacto-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'edlo', component: EdloComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'lenguas', component: LenguasComponent },
  { path: 'nosotros', component: NosotrosPageComponent },
  { path: 'noticias', component: NoticiasPageComponent },
  { path: 'contacto', component: ContactoPageComponent },
  { path: '**', redirectTo: 'inicio' }
];
