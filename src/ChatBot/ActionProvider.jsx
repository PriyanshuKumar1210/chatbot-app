import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

const handleLogin = () =>{
  const message = createChatBotMessage('To log in, go to the login page, enter your email and password, then click Submit');
  updateState(message);
}

const handleSignup=()=>{
  const message = createChatBotMessage('To sign up, go to the sign-up page, fill in your name, email, password, and click Register');
  updateState(message);
}

const handleForget=()=>{
  const message = createChatBotMessage('To reset your password, go to the login page and click on Forgot Password, then follow the instructions.');
  updateState(message);
}

  const updateState = (message) =>{
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleLogin,
            handleSignup,
            handleForget
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;