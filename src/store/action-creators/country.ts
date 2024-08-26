import { Dispatch } from "redux";
import {
  CountriesAction,
  CountriesActionTypes,
  Country,
} from "../../types/countryTypes";
import axios from "axios";

export const fetchCountries = () => {
  return async (dispatch: Dispatch<CountriesAction>) => {
    try {
      dispatch({ type: CountriesActionTypes.FETCH_COUNTRIES });
      const response = await axios.get<Country[]>(
        "https://freetestapi.com/api/v1/countries"
      );
      dispatch({
        type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CountriesActionTypes.FETCH_COUNTRIES_ERROR,
        payload: "Error with loading countries!",
      });
    }
  };
};

export const countriesErrorClear = (): CountriesAction => ({
  type: CountriesActionTypes.COUNTRIES_ERROR_CLEAR,
});
