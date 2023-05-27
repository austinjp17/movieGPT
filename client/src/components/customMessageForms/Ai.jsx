import React, {useState, useEffect} from "react";
import MessageFormUI from "./MessageFormUI";
import { usePostAiTextMutation } from "@/state/api";

const Ai = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [responding, setResponding] = useState(false)
  const [trigger] = usePostAiTextMutation();
  
  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    setResponding(true)
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.activeChatId,
    };

    props.onSubmit(form);
    trigger(form);
    setMessage("");
    setAttachment("");
  };

  /* DISALLOWS MESSAGE INPUT FOR DELAY TIME TO WAIT FOR MODEL RESP */
  useEffect(() => {
    if (responding) {
      const timeout = setTimeout(() => {
        setResponding(false);
      }, 20000); // 20 seconds in milliseconds

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [responding]);


  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      responding={responding}
    />
  );
};

export default Ai;
