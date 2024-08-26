import React from "react";
import classes from "./style.module.css";

const InfoLoader: React.FC = () => {
  return (
    <div>
      <div className={classes.loader}></div>
    </div>
  );
};

export default InfoLoader;
