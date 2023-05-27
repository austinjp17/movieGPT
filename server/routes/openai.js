import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
  try {
    const { text, activeChatId } = req.body;
    console.log("Query Text:", text)
    const response = await openai.createChatCompletion({
              model: "gpt-3.5-turbo",
              messages: [
                // { role: "system", content: "You will suggest a list of at least five movies and the year they were made along with summaries you think I would like using html formatting. Ensure that" }, // this represents the bot and what role they will assume
                {role: "assistant", content: "You will suggest at least five different movies along with summaries you think I would like based on the movie, actor, or movie genre provided. Format your response using <ol> tags to denote the list, and <li> tags to denote each list item, html <strong> tags to bold the movie titles, and <br/> tags to add a line break before and after each movie title" },
                {role: "assistant", content: "If you need more information to make suggestions please suggest five iconic movies fitting the prompt as well as you can and ask for more clarification at the end in a seperate paragraph."},
                { role: "user", content: text }, // the message that the user sends
              ],
              temperature: 0.5, // [0:2] Higher -> More Random
              top_p: 1, // Nucleus Sampling: Alternative to temp
              n:1, // Num of chat completion choices to gen
              max_tokens: 2048,
              presence_penalty: 0, // [-2:2] Positive vals penalize new tokens based on their previous freq

              frequency_penalty:0, // [-2:2] Pos val penalize new tokens based on existing freq
              
            //   logit_bias: null, //json obj mapping tokens to bias value [-100:100]

            //   user: null, //unique identifier to monitor/detect abuse

            });

    // console.log("RES", response.data.choices[0].message.content)

    await axios.post(
      `https://api.chatengine.io/chats/${activeChatId}/messages/`,
      { text: response.data.choices[0].message.content },
      {
        headers: {
          "Project-ID": process.env.PROJECT_ID,
          "User-Name": process.env.BOT_USER_NAME,
          "User-Secret": process.env.BOT_USER_SECRET,
        },
      }
    );

    res.status(200).json({ text: response.data.choices[0].text });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
