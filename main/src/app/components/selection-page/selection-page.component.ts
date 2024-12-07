import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {FirstPageComponent} from "../first-page/first-page.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-selection-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    FirstPageComponent,
    ReactiveFormsModule
  ],
  templateUrl: './selection-page.component.html',
  styleUrl: './selection-page.component.scss'
})
export class SelectionPageComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      consumoEnergia: this.fb.group({
        nivel: ['']
      }),
      desempenho: this.fb.group({
        nivel: ['']
      }),
      custo: this.fb.group({
        nivel: ['']
      }),
      tipoAplicacao: this.fb.group({
        nivel: ['']
      })
    });
  }

  onSubmit() {
    // Extrair os valores do formulário
    const formData = {
      consumoEnergia: this.form.get('consumoEnergia.nivel')?.value,
      desempenho: this.form.get('desempenho.nivel')?.value,
      custo: this.form.get('custo.nivel')?.value,
      tipoAplicacao: this.form.get('tipoAplicacao.nivel')?.value
    };

    // Navegar com os valores do formulário como query parameters
    this.router.navigate(['/begin/results-page'], { queryParams: formData });
  }
}
