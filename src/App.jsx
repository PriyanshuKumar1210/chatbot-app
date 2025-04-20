import React, { useState } from 'react'
import './App.css'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './ChatBot/config.jsx'
import MessageParser from './ChatBot/MessageParser.jsx'
import ActionProvider from './ChatBot/ActionProvider.jsx'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChatbot = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className='app'>
      {isOpen && (
        <div className="chatbot-popup">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}

      <button className="chatbot-toggle-button" onClick={toggleChatbot}>
        {isOpen ? '×' : '?'}
      </button>
    </div>
  )
}

export default App
