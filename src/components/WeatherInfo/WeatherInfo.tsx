import React from "react";
import classes from "./style.module.css";
import { Weather } from "../../types/weatherTypes";

interface WeatherInfoProps {
  data: Weather;
}

const WeatherInfo: React.FC<WeatherInfoProps> = (props) => {
  const { data } = props;

  return (
    <div className={classes.weatherInfo}>
      <div className={classes.weatherInfoItem}>
        <span className={classes.weatherInfoItemText}>
          Temperature:
          <span className={classes.weatherInfoItemTextData}>
            &#x20;{data.temp_C}&#176;C
          </span>
        </span>
      </div>
      <div className={classes.weatherInfoItem}>
        <span className={classes.weatherInfoItemText}>
          Feels like:
          <span className={classes.weatherInfoItemTextData}>
            &#x20;{data.FeelsLikeC}&#176;C
          </span>
        </span>
      </div>
      <div className={classes.weatherInfoItem}>
        <span className={classes.weatherInfoItemText}>
          Wind speed:
          <span className={classes.weatherInfoItemTextData}>
            &#x20;{data.windspeedKmph}km/h
          </span>
        </span>
      </div>
      <div className={classes.weatherInfoItem}>
        <span className={classes.weatherInfoItemText}>
          Visibility:
          <span className={classes.weatherInfoItemTextData}>
            &#x20;{data.visibility}km
          </span>
        </span>
      </div>
      <div className={classes.weatherInfoItem}>
        <span className={classes.weatherInfoItemText}>
          Weather:
          <span className={classes.weatherInfoItemTextData}>
            &#x20;{data.type}
          </span>
        </span>
      </div>
    </div>
  );
};

export default WeatherInfo;
