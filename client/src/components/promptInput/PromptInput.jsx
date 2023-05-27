import React from "react";
import {PaperAirplaneIcon} from "@heroicons/react/24/solid"

const PromptInput = ({props}) => {
  return (
    <>
      <div className="message-form-input-container">
        <input
          className="message-form-input"
          type="text"
          value={props.message}
          onChange={props.handleChange}
          placeholder="What type of movie would you like to see?"
        />
      </div>
      <div className="message-form-icons">
        <hr className="vertical-line" />
        <PaperAirplaneIcon
          className="message-form-icon-airplane"
          onClick={() => {
            props.handleSubmit();
          }}
        />
      </div>
    </>
  );
};

export default PromptInput;
