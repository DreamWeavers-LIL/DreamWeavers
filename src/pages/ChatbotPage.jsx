
import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import ChatMessage from '../components/ChatMessage';

const ChatbotPage = () => {

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI campus assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const isFirstRender = useRef(true);
  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Sample responses for the chatbot
  const botResponses = {
    "hello": "Hi there! How can I assist you with your college questions today?",
    "hi": "Hello! What can I help you with?",
    "help": "I can help you find information about classes, campus facilities, events, faculty, and more. Just ask me anything!",
    "class": "What specific class or department are you looking for information about?",
    "where": "Which campus location are you trying to find? You can also check our campus map for detailed navigation.",
    "library": "The main library is located in the center of campus and is open from 8 AM to 10 PM on weekdays, and 10 AM to 8 PM on weekends.",
    "registration": "Course registration begins next Monday. You can register through the student portal using your student ID and password.",
    "cafeteria": "There are three cafeterias on campus: The Main Hall (open 7 AM - 8 PM), Science Building Café (8 AM - 6 PM), and Residence Hall Dining (7 AM - 10 PM).",
    "events": "This week we have a career fair on Wednesday, a concert on Friday evening, and study groups throughout the week. Check the campus calendar for details.",
    "deadline": "The deadline for adding or dropping classes is September 15th. The application deadline for graduation is October 1st.",
  };

  const getBotResponse = (userMessage) => {

    const lowerCaseMessage = userMessage.toLowerCase();

    // Check if any keywords in the user message match our responses
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerCaseMessage.includes(keyword)) {
        return response;
      }
    }

    // Default response if no keywords match
    return "I don't have specific information about that yet. Would you like me to connect you with a student advisor?";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    })
      .then((res) => res.json())
      .then((data) => {
        const botMessage = {
          id: messages.length + 2,
          text: data.reply || "Sorry, I couldn't get a response.",
          isUser: false,
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        const botMessage = {
          id: messages.length + 2,
          text: "An error occurred. Please try again.",
          isUser: false,
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      });
  };


  return (

    <div className="page-transition min-h-screen pt-16 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Campus Assistant</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ask me anything about campus life, classes, events, or resources.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-medium overflow-hidden">
            {/* Chat messages container */}
            <div className="h-[400px] overflow-y-auto p-4 md:p-6 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    message={message.text}
                    isUser={message.isUser}
                  />
                ))}

                {isTyping && <ChatMessage isTyping isUser={false} />}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-gray-100">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                  disabled={!input.trim()}
                >
                  <Send size={18} />
                  <span className="sr-only">Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
