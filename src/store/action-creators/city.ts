import { Dispatch } from "react";
import { getCities } from "../../utils/request";
import { CitiesAction, CitiesActionTypes } from "../../types/cityTypes";

export const fetchCities = (country: string) => {
  return async (dispatch: Dispatch<CitiesAction>) => {
    try {
      dispatch({ type: CitiesActionTypes.FETCH_CITIES });
      const data = await getCities(country);
      dispatch({
        type: CitiesActionTypes.FETCH_CITIES_SUCCESS,
        payload: data.geonames,
      });
    } catch (error) {
      dispatch({
        type: CitiesActionTypes.FETCH_CITIES_ERROR,
        payload: "Error with loading cities!",
      });
    }
  };
};

export const citiesErrorClear = (): CitiesAction => ({
  type: CitiesActionTypes.CITIES_ERROR_CLEAR,
});
