import {
  CountriesAction,
  CountriesActionTypes,
  CountriesState,
} from "../../types/countryTypes";

const initialState: CountriesState = {
  countries: [],
  error: null,
  loading: false,
};

export const countriesReducer = (
  state: CountriesState = initialState,
  action: CountriesAction
): CountriesState => {
  switch (action.type) {
    case CountriesActionTypes.FETCH_COUNTRIES:
      return { ...state, loading: true };
    case CountriesActionTypes.FETCH_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload, loading: false };
    case CountriesActionTypes.FETCH_COUNTRIES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CountriesActionTypes.COUNTRIES_ERROR_CLEAR:
      return { ...state, error: null };
    default:
      return state;
  }
};
