import { ChatOpenAI } from "langchain/chat_models";
import {HumanChatMessage} from 'langchain/schema'
import * as dotenv from "dotenv";
dotenv.config();

const openAIApiKey = process.env.OPENAI_API_KEY;
const chat = new ChatOpenAI({ openAIApiKey });

// export const run = async () => {
//   try{

//     const response = await chat.call([
//       new HumanChatMessage("Hello, LangChain!"),
//     ]);
    
//     console.log("Response:", response);
//   } catch(err) {
//     console.log(err)
//   }
// };

// run();