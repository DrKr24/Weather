import { Error } from "./countryTypes";

export interface WeatherDescriptionsObject {
  [key: string]: string[];
}

interface WeatherTypeObject {
  value: string;
}

export interface weatherDataObject {
  FeelsLikeC: string;
  weatherDesc?: WeatherTypeObject[];
  temp_C: string;
  visibility: string;
  windspeedKmph: string;
}

export interface Weather extends weatherDataObject {
  type: string;
}

export interface WeatherResponse {
  current_condition: weatherDataObject[];
  nearest_area: any[];
  request: any[];
  weather: any[];
}

export interface WeatherState {
  weather: Weather;
  error: Error;
  loading: boolean;
  isLoaded: boolean;
}

export enum WeatherActionTypes {
  FETCH_WEATHER = "FETCH_WEATHER",
  FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR",
  CLEAR_WEATHER = "CLEAR_WEATHER",
}

interface fetchWeatherAction {
  type: WeatherActionTypes.FETCH_WEATHER;
}

interface fetchWeatherSuccessAction {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
  payload: Weather;
}

interface fetchWeatherErrorAction {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR;
  payload: Error;
}

interface weatherCleanAction {
  type: WeatherActionTypes.CLEAR_WEATHER;
}

export type WeatherAction =
  | fetchWeatherAction
  | fetchWeatherSuccessAction
  | fetchWeatherErrorAction
  | weatherCleanAction;
