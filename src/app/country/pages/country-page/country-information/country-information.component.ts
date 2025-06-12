import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CountryInformation } from '../../../interfaces/country-information';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<CountryInformation>();
}
