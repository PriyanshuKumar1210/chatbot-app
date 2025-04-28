


import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../Components/Option/Option.jsx';


const config = {
    botName: "Login Guider",
      initialMessages: [
        createChatBotMessage(`Hey, Welcome !. I'm here to guide you.`,{
            widget: "options",
        })],

    customComponents:{
        input:()=> <div style={{display:"none"}}></div>
           
    },
      widgets: [
        {
          widgetName: 'options',
          widgetFunc: (props) => <Options {...props} />
        },
    ]
};

export default config;

