import React, { useState, useEffect } from 'react';
import robotIcon from '../assets/robot3.webp';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [hasUnreadMessage, setHasUnreadMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleBotResponse = () => {
      const botMessages = [
        {
          content: '¡Hola! ¡Gracias por visitar mi portfolio!, ¿qué te gustaría ver?',
          isUser: false,
        },
      ];

      setMessages([...messages, ...botMessages]);
      setHasUnreadMessage(true);
    };

    if (isOpen && messages.length === 0) {
      handleBotResponse();
    }
  }, [isOpen, messages]);

  useEffect(() => {
    const handlePageLoad = () => {
      setHasUnreadMessage(true);
    };

    handlePageLoad();

    return () => {
      setHasUnreadMessage(false);
    };
  }, []);

  const handleToggleChatbot = () => {
    setIsOpen(!isOpen);
    setHasUnreadMessage(false);
  };

  const handleOpenChatbot = () => {
    setIsOpen(true);
    setHasUnreadMessage(false);
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/francobogado/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/FrancoNat', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4">
      {!isOpen && (
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white cursor-pointer relative ${
            hasUnreadMessage ? 'bg-red-500' : ''
          } ${isHovered ? 'scale-110' : ''}`}
          onClick={handleOpenChatbot}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {hasUnreadMessage && <div className="w-2 h-2 rounded-full bg-red-500 absolute top-1 right-1" />}
          <img src={robotIcon} alt="Robot Icon" className="robot-icon" />
        </div>
      )}
      {isOpen && (
        <div className="w-64 h-96 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-500 text-white px-4 py-2 flex items-center justify-between">
            <h3 className="text-lg font-bold">Chatbot</h3>
            <div className="close-icon">
              <span
                className="material-icons cursor-pointer"
                onClick={handleToggleChatbot}
              >
                close
              </span>
            </div>
          </div>
          <div className="h-80 p-4 pb-2 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
              >
                <p
                  className={`rounded p-2 ${
                    message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}
            {!messages.length && (
              <div className="message bot-message" style={{ marginBottom: '10px' }}>
                <p className="rounded p-2 bg-gray-200 text-black">
                  ¡Hola! ¡Gracias por visitar mi portfolio!, ¿qué te gustaría ver?
                </p>
              </div>
            )}
            {messages.length > 0 && (
              <div className="message bot-message" style={{ marginBottom: '10px' }}>
                <p className="rounded p-2 bg-gray-200 text-black">
                  ¿Querés visitar mi perfil de LinkedIn?
                  <span
                    className="message-link text-blue-500 cursor-pointer"
                    onClick={handleLinkedInClick}
                  >
                    Haz clic aquí.
                  </span>
                </p>
              </div>
            )}
            {messages.length > 0 && (
              <div className="message bot-message" style={{ marginBottom: '10px' }}>
                <p className="rounded p-2 bg-gray-200 text-black">
                  ¿Te gustaría ver mi repositorio en GitHub?
                  <span
                    className="message-link text-blue-500 cursor-pointer"
                    onClick={handleGitHubClick}
                  >
                    Haz clic aquí.
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;







































