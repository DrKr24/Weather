import {
  Weather,
  weatherDataObject,
  WeatherDescriptionsObject,
} from "../types/weatherTypes";

const weatherDescriptions: WeatherDescriptionsObject = {
  sunny: ["Sunny", "Clear"],
  cloudy: ["Partly cloudy", "Cloudy", "Overcast"],
  rain: ["rain", "shower", "drizzle"],
  snow: ["snow", "sleet"],
  fog: ["Mist", "Fog", "Freezing fog"],
};

export const determineWeatherType = (description: string): string => {
  let result: string = "";
  for (let key in weatherDescriptions) {
    const isHasProperty: boolean = weatherDescriptions[key].some((type) =>
      description.toLowerCase().includes(type.toLowerCase())
    );
    if (isHasProperty) {
      result = key;
    }
  }
  return result;
};

export const determineWeatherData = (data: weatherDataObject[]): Weather => {
  const {
    FeelsLikeC,
    weatherDesc,
    temp_C,
    visibility,
    windspeedKmph,
  }: weatherDataObject = data[0];
  return {
    FeelsLikeC: FeelsLikeC,
    temp_C: temp_C,
    visibility: visibility,
    windspeedKmph: windspeedKmph,
    type: !weatherDesc ? "Unknown" : determineWeatherType(weatherDesc[0].value),
  };
};
