import React, {useState} from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid";
import PromptInput from '@/components/promptInput/PromptInput';
import IsResponding from '@/components/IsResponding/IsResponding';

const MessageFormUI = ({
    setAttachment,
    message,
    handleChange,
    handleSubmit,
    responding,
}) => {
    const inputProps = {
      message:message,
      handleChange:handleChange,
      handleSubmit:handleSubmit
    }
  return (
    <div className="message-form-container">
      
      <div className="message-form">
        {responding ? 
        <IsResponding/> : 
        <PromptInput
          props={inputProps}
        />}
        
      </div>
    </div>
  )
}

export default MessageFormUI