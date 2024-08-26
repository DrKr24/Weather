import {
  WeatherAction,
  WeatherActionTypes,
  WeatherState,
} from "../../types/weatherTypes";

const initialState: WeatherState = {
  weather: {
    FeelsLikeC: "",
    temp_C: "",
    visibility: "",
    windspeedKmph: "",
    type: "",
  },
  loading: false,
  error: null,
  isLoaded: false,
};

export const weatherReducer = (
  state: WeatherState = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER:
      return { ...state, loading: true };
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload,
        isLoaded: true,
      };
    case WeatherActionTypes.FETCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case WeatherActionTypes.CLEAR_WEATHER:
      return {
        ...state,
        isLoaded: false,
        error: null,
        weather: {
          FeelsLikeC: "",
          temp_C: "",
          visibility: "",
          windspeedKmph: "",
          type: "",
        },
      };
    default:
      return state;
  }
};
