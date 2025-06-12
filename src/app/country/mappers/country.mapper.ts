import { CountryInformation } from '../interfaces/country-information';
import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.interface';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      capital: restCountry.capital.join(','),
      population: restCountry.population,
    };
  }

  static mapRestCountryToCountryInformation(
    restCountry: RESTCountry
  ): CountryInformation {
    return {
      capital: restCountry.capital.join(','),
      borders: restCountry.borders,
      cca2: restCountry.cca2,
      flagSvg: restCountry.flags.svg,
      map: restCountry.maps.googleMaps,
      name: restCountry.translations['spa'],
      population: restCountry.population,
    };
  }

  static mapRestCountryToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }

  static mapRestCountryInformationToCountryArray(
    restCountries: RESTCountry[]
  ): CountryInformation[] {
    return restCountries.map(this.mapRestCountryToCountryInformation);
  }
}
