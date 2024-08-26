import { CitiesResponse } from "../types/cityTypes";

export const isCached = (name: string): boolean => {
  const condition = localStorage.getItem(name);
  if (condition) {
    return true;
  }
  return false;
};

export const setCache = (data: CitiesResponse, name: string): void => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getCache = (name: string): CitiesResponse => {
  const response = localStorage.getItem(name);
  return response ? JSON.parse(response) : null;
};
