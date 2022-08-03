import React from "react";

function ChatInput() {
  return (
    <div className="chat_input">
      <input placeholder="Enter your message" />
      <button id="send_message">Send</button>
    </div>
  );
}

export default ChatInput;
