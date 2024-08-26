import {
  CitiesAction,
  CitiesActionTypes,
  CitiesState,
} from "../../types/cityTypes";

const initialState: CitiesState = {
  cities: [],
  error: null,
  loading: false,
};

export const citiesReducer = (
  state: CitiesState = initialState,
  action: CitiesAction
): CitiesState => {
  switch (action.type) {
    case CitiesActionTypes.FETCH_CITIES:
      return { ...state, loading: true };
    case CitiesActionTypes.FETCH_CITIES_SUCCESS:
      return { ...state, cities: action.payload, loading: false };
    case CitiesActionTypes.FETCH_CITIES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CitiesActionTypes.CITIES_ERROR_CLEAR:
      return { ...state, error: null };
    default:
      return state;
  }
};
