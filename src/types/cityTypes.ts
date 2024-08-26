export type CitiesCountryResponse = CitiesCountryObject[];

export interface CitiesCountryObject {
  cca2: string;
}

export interface CitiesResponse {
  geonames: City[];
  totalResultsCount: number;
}

export interface City {
  adminCode1: string;
  adminCodes1: object;
  adminName1: string;
  countryCode: string;
  countryId: string;
  countryName: string;
  fcl: string;
  fclName: string;
  fcode: string;
  fcodeName: string;
  geonameId: number;
  lat: string;
  lng: string;
  name: string;
  population: number;
  toponymName: string;
}

export type Error = string | null;

export interface CitiesState {
  cities: City[];
  error: Error;
  loading: boolean;
}

export enum CitiesActionTypes {
  FETCH_CITIES = "FETCH_CITIES",
  FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS",
  FETCH_CITIES_ERROR = "FETCH_CITIES_ERROR",
  CITIES_ERROR_CLEAR = "CITIES_ERROR_CLEAR",
}

interface FetchCitiesAction {
  type: CitiesActionTypes.FETCH_CITIES;
}

interface FetchCitiesActionSuccess {
  type: CitiesActionTypes.FETCH_CITIES_SUCCESS;
  payload: City[];
}

interface FetchCitiesActionError {
  type: CitiesActionTypes.FETCH_CITIES_ERROR;
  payload: string;
}

interface CitiesErrorClear {
  type: CitiesActionTypes.CITIES_ERROR_CLEAR;
}

export type CitiesAction =
  | FetchCitiesAction
  | FetchCitiesActionSuccess
  | FetchCitiesActionError
  | CitiesErrorClear;
