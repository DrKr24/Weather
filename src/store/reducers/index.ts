import { combineReducers } from "redux";
import { countriesReducer } from "./countriesReducer";
import { citiesReducer } from "./citiesReducer";
import { weatherReducer } from "./weatherReducer";

export const rootReducer = combineReducers({
  countryReducer: countriesReducer,
  citiesReducer: citiesReducer,
  weatherReducer: weatherReducer,
});
