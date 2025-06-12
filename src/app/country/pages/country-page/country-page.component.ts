import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { CountryService } from '../../services/country.service';
import { CountryInformationComponent } from './country-information/country-information.component';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  countryCode = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['code']))
  );
  countryService = inject(CountryService);

  countryResource = rxResource({
    request: () => ({ code: this.countryCode() }),
    loader: ({ request }) => {
      return this.countryService.searchCountryByAlphaCode(request.code);
    },
  });
}
