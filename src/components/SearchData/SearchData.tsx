import React from "react";
import classes from "./style.module.css";
import { Country } from "../../types/countryTypes";
import SearchDataItem from "../SearchDataItem/SearchDataItem";
import { filterData } from "./utils";
import { City } from "../../types/cityTypes";
import { setState } from "../DashboardComponent/Dashboard";
import InputLoader from "../UI/InputLoader";

interface SearchDataProps {
  data: Country[] | City[];
  fetchData?: (arg: string) => void;
  placeholder: string;
  registerCallback: (arg: setState[]) => void;
  loader: boolean;
  loading?: boolean;
}

const SearchData: React.FC<SearchDataProps> = (props) => {
  const {
    data,
    fetchData,
    placeholder,
    registerCallback,
    loader,
    loading = false,
  } = props;

  const [searchValue, setSearchValue] = React.useState<string>("");
  const [isShowTooltip, setIsShowTooltip] = React.useState<boolean>(false);

  React.useEffect(() => {
    registerCallback([setSearchValue, setIsShowTooltip]);
  }, []);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const length = value.length;
    setSearchValue(value);
    setIsShowTooltip(length >= 2);
  };

  const setSearchFieldValueHandler = (value: string): void => {
    setSearchValue(value);
    setIsShowTooltip(false);
  };

  const renderTooltipData = (
    data: Country[] | City[]
  ): React.ReactElement[] => {
    if (!data.length) {
      return [<SearchDataItem key={"Not-found"} name={"Not found"} />];
    }
    return data.map((item, index) => (
      <SearchDataItem
        fetchData={fetchData}
        key={`${item.name}${index}`}
        name={item.name}
        setSearchFieldValueHandler={setSearchFieldValueHandler}
      />
    ));
  };

  return (
    <div className={classes.inputContainer}>
      <input
        type="text"
        className={classes.inputText}
        value={searchValue}
        onChange={changeHandler}
        placeholder={placeholder}
      />
      {loader && loading ? <InputLoader /> : null}
      {isShowTooltip ? (
        <div className={classes.tooltip}>
          {renderTooltipData(filterData(data, searchValue))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchData;
