import { Dispatch } from "redux";
import { WeatherAction, WeatherActionTypes } from "../../types/weatherTypes";
import { getWeather } from "../../utils/request";

export const fetchWeather = (name: string) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({ type: WeatherActionTypes.FETCH_WEATHER });
      const data = await getWeather(name);
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: "Error with loading weather!",
      });
    }
  };
};

export const weatherClear = (): WeatherAction => ({
  type: WeatherActionTypes.CLEAR_WEATHER,
});
