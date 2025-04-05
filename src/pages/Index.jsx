
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bot, MapPin, Users, ChevronRight, Instagram } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Index = () => {
  const featuresRef = useRef(null);
  
  // Create intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('staggered-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  // Features data
  const features = [
    {
      title: 'AI Chatbot Assistant',
      description: 'Get instant answers to all your questions about college life, courses, and resources.',
      icon: <Bot size={28} className="text-primary" />,
      link: '/chatbot'
    },
    {
      title: 'Campus Navigator',
      description: 'Never get lost again with our interactive map and location details for the entire campus.',
      icon: <MapPin size={28} className="text-primary" />,
      link: '/navigation'
    },
    {
      title: 'Student-Built Project',
      description: 'Created by students, for students. Learn more about our team and our mission.',
      icon: <Users size={28} className="text-primary" />,
      link: '/about'
    }
  ];

  return (
    <div className="page-transition min-h-screen">
      {/* Hero section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="ml-2 text-sm font-medium text-gray-900">Dream Weavers Project</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-slide-in-left">
              AI-Powered Chatbot<br/>
              <span className="text-primary">A Personal Assistant</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mb-8 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              Simplifying college life with artificial intelligence. Get answers, navigate campus, and access resources all in one place.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/chatbot"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow transform hover:-translate-y-1"
              >
                Try the Chatbot
                <ChevronRight size={18} className="ml-2" />
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow border border-gray-200 transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Designed for Students</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI assistant is customized to handle all aspects of campus life.
            </p>
          </div>
          
          <div ref={featuresRef} className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl p-8 bg-white border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Explore
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Dream Weavers. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
