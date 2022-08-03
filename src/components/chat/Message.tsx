import React from "react";

type messageProps = {
  message: string;
  alias_name: string;
  timestamp: string;
};

function Message(props: messageProps) {
  return (
    <div className="chat_message">
      <span className="timestamp">{props.timestamp}</span>
      <span className="user">{props.alias_name}:</span>
      <span className="message">{props.message}</span>
    </div>
  );
}

export default Message;
