import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-page',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent
    ],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent {
  constructor(private router: Router) {
  }
  goToSelector(){
    this.router.navigate([`/begin/selection-page`])
  }
}
