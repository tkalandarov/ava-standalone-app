import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./ChatBubble.css";
// import { set } from "mongoose";

export const ChatBubble = (props) => {
  const classes = ["chat-bubble"];
  if(props.sentByUser) classes.push("user-chat-bubble");

  return (
    <div
      className={classes.join(" ")}
    >
      <div className="chat-bubble__text">
        <ReactMarkdown children={props.text} remarkPlugins={[remarkGfm]}></ReactMarkdown>
      </div>
      <div className="chat-bubble__status">
        {props.time}
        {props.sentByUser && <div className="chat-bubble__ticks"></div>}
      </div>
    </div>
  );
};