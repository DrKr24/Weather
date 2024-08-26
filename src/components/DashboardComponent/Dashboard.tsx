import React from "react";
import classes from "./style.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import SearchData from "../SearchData/SearchData";
import ButtonRefresh from "../UI/ButtonRefresh";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import InfoLoader from "../UI/InfoLoader";
import { errorBoundary } from "../../utils/conditions";
import Message from "../Message/Message";
import { useCombineDispatch } from "../../hooks/useCombineDispatch";
import { citiesErrorClear } from "../../store/action-creators/city";
import { countriesErrorClear } from "../../store/action-creators/country";
import { getBackground } from "../../utils/background";

export type setState = React.Dispatch<React.SetStateAction<any>>;

const Dashboard: React.FC = () => {
  const {
    countries,
    loading: countriesLoading,
    error: countriesError,
  } = useTypedSelector((state) => state.countryReducer);

  const {
    cities,
    error: citiesError,
    loading: citiesLoading,
  } = useTypedSelector((state) => state.citiesReducer);
  const {
    weather,
    isLoaded,
    error: weatherError,
  } = useTypedSelector((state) => state.weatherReducer);

  const { fetchCountries, fetchCities, fetchWeather, weatherClear } =
    useActions();
  const combineDispatch = useCombineDispatch();

  const [clearCallbacks, setClearCallbacks] = React.useState<setState[]>([]);

  const registerCallback = (callbacks: setState[]): void => {
    setClearCallbacks((prev) => [...prev, ...callbacks]);
  };

  const clear = () => {
    combineDispatch([weatherClear, citiesErrorClear, countriesErrorClear]);
  };

  const clearInputs = (): void => {
    clear();
    clearCallbacks.forEach((callback) =>
      callback((prev: any) => (typeof prev === "string" ? "" : false))
    );
  };

  React.useEffect(() => {
    fetchCountries();
  }, []);

  const fetchDataHandler = (arg: string) => {
    fetchCities(arg);
  };

  const renderAditional = (): React.ReactElement => {
    const error = errorBoundary([countriesError, citiesError, weatherError]);
    if (error) {
      return <Message message={error} color="rgb(211, 74, 74)" />;
    } else {
      if (isLoaded) {
        return <WeatherInfo data={weather} />;
      } else {
        return <InfoLoader />;
      }
    }
  };

  return (
    <div
      className={classes.dashboardWrapper}
      style={{
        background: getBackground(weather.type),
        transition: "background 0.5s",
      }}
    >
      <div className={classes.dashboard}>
        <div className={classes.searchContainer}>
          <SearchData
            registerCallback={registerCallback}
            fetchData={fetchDataHandler}
            data={countries}
            placeholder="Search your country"
            loader={true}
            loading={countriesLoading}
          />
          <SearchData
            fetchData={fetchWeather}
            registerCallback={registerCallback}
            data={cities}
            placeholder="Search your city"
            loader={true}
            loading={citiesLoading}
          />
          <ButtonRefresh action={clearInputs} />
        </div>
        {renderAditional()}
      </div>
    </div>
  );
};

export default Dashboard;
