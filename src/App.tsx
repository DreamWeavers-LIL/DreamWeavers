
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChatbotPage from "./pages/ChatbotPage";
import NavigationPage from "./pages/NavigationPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import ScrollToTop from './ScrollToTop';

const queryClient = new QueryClient();

const App = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (pageLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="w-16 h-16 relative animate-pulse-light">
          <div className="absolute inset-0 rounded-full bg-primary opacity-20"></div>
          <div className="absolute inset-2 rounded-full bg-primary opacity-40"></div>
          <div className="absolute inset-4 rounded-full bg-primary opacity-60"></div>
          <div className="absolute inset-6 rounded-full bg-primary"></div>
        </div>
        <h2 className="mt-6 font-medium text-gray-900">Dream Weavers</h2>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop /> 
          <div className="relative">
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
              <Route path="/navigation" element={<NavigationPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
