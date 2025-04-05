
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="text-center max-w-md animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="text-8xl font-bold text-gray-900">404</div>
            <div className="absolute -top-4 -right-4 bg-primary text-white text-sm font-medium px-2 py-1 rounded-full">
              Error
            </div>
          </div>
        </div>
        
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
