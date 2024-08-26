import axios from "axios";
import { CitiesCountryResponse, CitiesResponse } from "../types/cityTypes";
import { Weather, WeatherResponse } from "../types/weatherTypes";
import { determineWeatherData } from "./weather";
import { getCache, isCached, setCache } from "./cache";

export const getCities = async (country: string): Promise<CitiesResponse> => {
  if (isCached(country)) {
    return new Promise((res) => {
      res(getCache(country));
    });
  }
  const username = "drkr24";
  const urlForCCA2 = `https://restcountries.com/v3.1/name/${country}`;
  const response = await axios.get<CitiesCountryResponse>(urlForCCA2);
  const data = response.data;
  const countryCode = data[0].cca2;
  const urlForCities = `http://api.geonames.org/searchJSON?country=${countryCode}&featureClass=P&maxRows=1000&username=${username}`;
  const citiesResponse = await axios.get<CitiesResponse>(urlForCities);
  const citiesData = citiesResponse.data;
  setCache(citiesData, country);
  return citiesData;
};

export const getWeather = async (name: string): Promise<Weather> => {
  const url: string = `https://wttr.in/${name}?format=j1&0`;
  const response = await axios.get<WeatherResponse>(url);
  const data = response.data;
  return determineWeatherData(data.current_condition);
};
