import React from "react";
import "./ChatBubble.css";

export const ChatBubble = (props) => {
  const classes = ["chat-bubble"];
  if(props.sentByUser) classes.push("user-chat-bubble");

  return (
    <div
      className={classes.join(" ")}
    >
      <div className="chat-bubble__text">{props.text}</div>
      <div className="chat-bubble__status">
        {props.time}
        {props.sentByUser && <div className="chat-bubble__ticks"></div>}
      </div>
    </div>
  );
};
