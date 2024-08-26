import React from "react";
import classes from "./style.module.css";

interface SearchDataItemProps {
  name: string;
  setSearchFieldValueHandler?: (value: string) => void;
  fetchData?: (arg: string) => void;
}

const SearchDataItem: React.FC<SearchDataItemProps> = (props) => {
  const { name, setSearchFieldValueHandler, fetchData } = props;

  return (
    <p
      onClick={() => {
        if (setSearchFieldValueHandler) {
          setSearchFieldValueHandler(name);
        }
        if (fetchData) {
          fetchData(name);
        }
      }}
      className={classes.tooltipItem}
    >
      {name}
    </p>
  );
};

export default SearchDataItem;
