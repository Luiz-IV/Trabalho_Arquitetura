import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {FirstPageComponent} from "../first-page/first-page.component";

@Component({
  selector: 'app-selection-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    FirstPageComponent
  ],
  templateUrl: './selection-page.component.html',
  styleUrl: './selection-page.component.scss'
})
export class SelectionPageComponent {

}
