export interface Country {
  capital: string;
  currency: string;
  density: number;
  flag: string;
  id: number;
  land_area: number;
  name: string;
  population: number;
}

export type Error = string | null;

export interface CountriesState {
  countries: Country[];
  error: Error;
  loading: boolean;
}

export enum CountriesActionTypes {
  FETCH_COUNTRIES = "FETCH_COUNTRIES",
  FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS",
  FETCH_COUNTRIES_ERROR = "FETCH_COUNTRIES_ERROR",
  COUNTRIES_ERROR_CLEAR = "COUNTRIES_ERROR_CLEAR",
}

interface FetchCountriesAction {
  type: CountriesActionTypes.FETCH_COUNTRIES;
}

interface FetchCountriesActionSuccess {
  type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS;
  payload: Country[];
}

interface FetchCountriesActionError {
  type: CountriesActionTypes.FETCH_COUNTRIES_ERROR;
  payload: string;
}

interface CountriesErrorClear {
  type: CountriesActionTypes.COUNTRIES_ERROR_CLEAR;
}

export type CountriesAction =
  | FetchCountriesAction
  | FetchCountriesActionSuccess
  | FetchCountriesActionError
  | CountriesErrorClear;
