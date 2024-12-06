import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppRevenueForecastComponent } from 'src/app/components/revenue-forecast/revenue-forecast.component';
import {FirstPageComponent} from "../../components/first-page/first-page.component";

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    MaterialModule,
    AppRevenueForecastComponent,
    FirstPageComponent,
  ],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {}
