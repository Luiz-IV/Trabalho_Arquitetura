import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCard, MatCardContent } from "@angular/material/card";
import {ActivatedRoute, Router} from "@angular/router";
import { OpenAIService } from '../components-services';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-results-page',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'] // Corrigido o nome da propriedade
})
export class ResultsPageComponent implements OnInit {
  parametros: any; // Armazena os parâmetros da rota
  respostaAPI: string = ''; // Armazena a resposta da API
  loading: boolean = false; // Indicador de carregamento

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private openAIService: OpenAIService
  ) {}

  ngOnInit() {
    // Captura os parâmetros da URL
    this.route.queryParams.subscribe(params => {
      this.parametros = params;

      // Verifica se os parâmetros existem antes de gerar o prompt
      if (this.parametros.consumoEnergia && this.parametros.desempenho && this.parametros.tipoAplicacao) {
        const prompt = this.gerarPrompt();
        this.enviarParaOpenAI(prompt);
      } else {
        this.respostaAPI = 'Os parâmetros necessários não foram fornecidos.';
      }
    });
  }

  // Gera o prompt baseado nos parâmetros
  private gerarPrompt(): string {
    return `Me indique a CPU que mais se adequa aos meus requisitos, que são:
    Um "${this.parametros.consumoEnergia}" de energia, que tenha "${this.parametros.desempenho}",
    que seja ideal para "${this.parametros.tipoAplicacao}, e que tenha um custo "${this.parametros.custo}"".
    Me mostre o tipo de processador, ex: AMD Ryzen 7, Intel Core i9 e etc.
    Me mostre o tipo de arquitetura, RISC ou CISC.
    Me mostre a memória cache, tendo sugestão de níveis de cache, como "L1 de 64KB e L2 de 512KB."
    Me mostre a frequência da CPU.
    E me mostre uma justificativa técnica do design, ou seja, uma breve justificativa da escolha da CPU.
    Lembre-se de fazer com o que o usuário compreenda o modelo da CPU que deve adquirir, e de sempre descrever
     o modelo do processador, ex: Ryzen 5 5600x, em vez de ser "Ryzen 5".`;
  }

  // Envia o prompt para a OpenAI
  private enviarParaOpenAI(prompt: string): void {
    this.loading = true; // Inicia o indicador de carregamento
    this.openAIService.getCPURecommendation(prompt).subscribe({
      next: (response) => {
        console.log('Resposta da API:', response); // Log para depuração
        this.respostaAPI = response.choices[0].message.content; // Ajustado ao novo formato
        this.loading = false; // Finaliza o carregamento
      },
      error: (error) => {
        console.error('Erro ao consultar a API:', error); // Log do erro
        this.respostaAPI = 'Houve um erro ao gerar a recomendação. Tente novamente mais tarde.';
        this.loading = false; // Finaliza o carregamento
      }
    });
  }

  goBack(){
    this.router.navigate([`/begin/selection-page`])
  }
}
