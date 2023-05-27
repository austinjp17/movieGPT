import React from 'react';
import {useMultiChatLogic, MultiChatSocket, MultiChatWindow} from "react-chat-engine-advanced";

import Header from "@/components/customHeader";
import ChatMessage from '@/components/ChatMessage/ChatMessage';
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm"
import Ai from '@/components/customMessageForms/Ai';

import GenreTab from '@/components/genreTab/GenreTab';

const Chat = () => {

    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "testuser",
        "1234"
    )
  return (
    <div style={{flexBasis: "100%"}}>
        <MultiChatSocket {...chatProps} />

        <MultiChatWindow {...chatProps} 
          style={{ height: "100vh" }}

          renderChatHeader={(chat) => <Header chat={chat}/>}

          

          renderMessageForm={(props) => {
            if (chatProps.chat?.title.startsWith("AiChat_")){
              return <Ai props={props} activeChat={chatProps} />
            }
            return(
                <StandardMessageForm props={props} activeChat={chatProps.chat} />
            )
          }}
          renderMessage={(props) => {
            return(
              <ChatMessage props={props}/>
            )
          }}

          renderPhotosSettings={(props) => {
            return(<GenreTab/>)
          }}

          // renderOptionsSettings={(props) => {
          //   console.log(props)
          //   return(
          //     <>
          //     <div>OptionSettings</div>
          //     </>
          //   )
          // }}

          //TODO: Fix chat card des
          // renderChatCard={(props) => {
          //   console.log(props)
          //   return(
          //     <></>
          //   )
          // }}

          // EVENT HOOKS

          // onMessageFormSubmit={(props) => {
          //   return(console.log("FORM SUBMIT", props))
          // }}

        />
    </div>
  )
}

export default Chat