import React from "react";
import classes from "./style.module.css";
import Refresh from "../../assets/refresh.png";

interface ButtonRefreshProps {
  action: () => void;
}

const ButtonRefresh: React.FC<ButtonRefreshProps> = (props) => {
  const { action } = props;

  return (
    <button onClick={action} className={classes.btnRefresh}>
      <img src={Refresh} alt="refresh" />
    </button>
  );
};

export default ButtonRefresh;
