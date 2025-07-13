
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Forum from "./pages/Forum";
import News from "./pages/News";
import FanArt from "./pages/FanArt";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/news" element={<News />} />
          <Route path="/fanart" element={<FanArt />} />
          <Route path="/cosplay" element={<FanArt />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/african-comics" element={<News />} />
          <Route path="/community" element={<Forum />} />
          <Route path="/quiz" element={<Profile />} />
          <Route path="/games" element={<Profile />} />
          <Route path="/favorites" element={<Profile />} />
          <Route path="/settings" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
