import { Country } from "../../types/countryTypes";

export const filterData = (
  data: Country[] | any[],
  searchString: string
): Country[] | any[] => {
  if (!data.length) return data;
  return data.filter((item) =>
    item.name.toLowerCase().includes(searchString.toLowerCase())
  );
};
