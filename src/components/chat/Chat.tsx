import React, { Component } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";

type messageType = {
  content: string;
  alias_name: string;
  timestamp: string;
  id: number;
};

type chatState = {
  messages: Array<messageType>;
};

class Chat extends Component<chatState> {
  state: chatState = {
    messages: [
      {
        content: "Hello world!",
        alias_name: "Brooklyn",
        timestamp: "6:24",
        id: 1
      }
    ]
  };

  render() {
    return (
      <div className="chat_wrapper">
        <div className="chat">
          {this.state.messages.map((message: messageType) => {
            return (
              <Message
                timestamp={message.timestamp}
                alias_name={message.alias_name}
                message={message.content}
                key={message.id}
              />
            );
          })}
        </div>
        <ChatInput />
      </div>
    );
  }
}

export default Chat;
