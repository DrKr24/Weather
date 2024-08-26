import React from "react";
import classes from "./style.module.css";

interface MessageProps {
  message: string | boolean;
  color?: string;
}

const Message: React.FC<MessageProps> = (props) => {
  const { message = "It's message!", color } = props;
  return (
    <div className={classes.messageContainer}>
      <span className={classes.messageText} style={{ color }}>
        {message}
      </span>
    </div>
  );
};

export default Message;
