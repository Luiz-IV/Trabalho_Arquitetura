import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import {FirstPageComponent} from "../components/first-page/first-page.component";
import {SelectionPageComponent} from "../components/selection-page/selection-page.component";
import {ResultsPageComponent} from "../components/results-page/results-page.component";

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter' },
      ],
    },
  },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'selection-page', component: SelectionPageComponent },
  { path: 'results-page', component: ResultsPageComponent },
];
