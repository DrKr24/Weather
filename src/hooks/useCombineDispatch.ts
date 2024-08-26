import { useDispatch } from "react-redux";
import { CitiesAction } from "../types/cityTypes";
import { CountriesAction } from "../types/countryTypes";
import { AppDispatch } from "../store";
import { WeatherAction } from "../types/weatherTypes";

type actionCreatorsType = () => CitiesAction | CountriesAction | WeatherAction;
type CombineDispatchFunction = (actionCreators: actionCreatorsType[]) => void;

export const useCombineDispatch = (): CombineDispatchFunction => {
  const dispatch = useDispatch<AppDispatch>();

  const combineDispatch: CombineDispatchFunction = (
    actionCreators: actionCreatorsType[]
  ) => {
    actionCreators.forEach((actionCreator) => {
      const action = actionCreator();
      dispatch(action);
    });
  };

  return combineDispatch;
};
