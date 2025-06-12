export interface CountryInformation {
  cca2: string;
  flagSvg: string;
  name: CountryName;
  capital: string;
  population: number;
  borders: string[];
  map: string;
}

export interface CountryName {
  official: string;
  common: string;
}
