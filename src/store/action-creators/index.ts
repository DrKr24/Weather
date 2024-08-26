import * as CountriesActionCreators from "./country";
import * as CitiesActionCreators from "./city";
import * as WeatherActionCreators from "./weather";

export default {
  ...CountriesActionCreators,
  ...CitiesActionCreators,
  ...WeatherActionCreators,
};
