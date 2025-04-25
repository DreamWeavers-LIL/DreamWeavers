
import React, { useState } from 'react';
import { Send, Instagram } from 'lucide-react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSent(true);
      setEmail('');
      setMessage('');
      // Reset success message after 3 seconds
      setTimeout(() => setIsSent(false), 3000);
    }, 500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-6">
            Have questions about our AI assistant? We'd love to hear from you.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Send size={18} className="mr-2" />
              Send Message
            </button>
            
            {isSent && (
              <p className="text-green-600 text-sm mt-2 animate-fade-in">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="text-gray-900">contact@dreamweavers.ai</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-500">Phone</p>
              <p className="text-gray-900">+91 9123513216</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-500">Follow Us</p>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-900 hover:text-primary transition-colors duration-200 mt-1"
              >
                <Instagram size={20} className="mr-2" />
                @dreamweavers.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
