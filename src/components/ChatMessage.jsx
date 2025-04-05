
import React from 'react';
import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ message, isUser, isTyping = false }) => {
  if (isTyping) {
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div
          className={`max-w-[80%] md:max-w-[70%] rounded-t-xl ${
            isUser 
              ? 'bg-primary text-white rounded-bl-xl' 
              : 'bg-gray-100 text-gray-800 rounded-br-xl'
          } px-4 py-3 shadow-sm`}
        >
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-current animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-current animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}>
      <div
        className={`max-w-[80%] md:max-w-[70%] rounded-t-xl ${
          isUser 
            ? 'bg-primary text-white rounded-bl-xl' 
            : 'bg-gray-100 text-gray-800 rounded-br-xl'
        } px-4 py-3 shadow-sm`}
      >
        <ReactMarkdown>{message}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage;
