import { Error } from "../types/countryTypes";

export const errorBoundary = (erros: Error[]): boolean | string | null => {
  const condition = erros.filter((error) => error);
  if (!condition.length) {
    return false;
  }
  return condition[0];
};
