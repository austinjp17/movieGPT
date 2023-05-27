import React from 'react'



//STYLESHEET
import "./ChatMessage.css"

const ChatMessage = ({props}) => {
    // console.log(props)
    const classname = "chat-message " + (props.isMyMessage ? "user-message" : "response-message")
  return (
    <div 
      className={classname}
      dangerouslySetInnerHTML={{ __html: props.message.text}}
    />
  )
}

export default ChatMessage