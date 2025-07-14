
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigation } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@/components/Loader";
import { ForumProvider } from "@/contexts/ForumContext";
import { forumRoutes } from "@/router/forumRoutes";
import Index from "./pages/Index";
import News from "./pages/News";
import FanArt from "./pages/FanArt";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds minimum

    return () => clearTimeout(timer);
  }, []);

  const handleLoaderExit = () => {
    setShowLoader(false);
  };

  return (
    <>
      <AnimatePresence>
        {(isLoading || showLoader) && (
          <Loader 
            isVisible={isLoading} 
            onExitComplete={handleLoaderExit}
          />
        )}
      </AnimatePresence>
      
      {!isLoading && !showLoader && (
        <Suspense fallback={<Loader />}>
          <ForumProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              {forumRoutes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
              <Route path="/news" element={<News />} />
              <Route path="/fanart" element={<FanArt />} />
              <Route path="/cosplay" element={<FanArt />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/african-comics" element={<News />} />
              <Route path="/community" element={<Index />} />
              <Route path="/quiz" element={<Profile />} />
              <Route path="/games" element={<Profile />} />
              <Route path="/favorites" element={<Profile />} />
              <Route path="/settings" element={<Profile />} />
              <Route path="/profile" element={<Profile />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ForumProvider>
        </Suspense>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
