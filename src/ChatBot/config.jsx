// import { createChatBotMessage } from "react-chatbot-kit";
// import Login from './Login.jsx';
// // import SignUp from './SignUp.jsx';
// import Options from "../Components/Option";

// const config = {
//   botName: "Login Guider",
//   initialMessages: [
//     createChatBotMessage(`Hey, Welcome !. I'm here to guide you.`, {
//       widget: "Login",
//     }),
//   ],
//   state: {
//     checker: null,
//   },

//   widgets: [
//     {
//       widgetName: "Login",
//       widgetFunc: (props) => <Login {...props} />,
//     },
//   ],
// };

// export default config;


import { createChatBotMessage } from 'react-chatbot-kit';
// import Login from '../Components/Login';
import Options from '../Components/Option';


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

