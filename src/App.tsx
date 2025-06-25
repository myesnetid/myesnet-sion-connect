
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginSuccess from "./pages/LoginSuccess";
import Status from "./pages/Status";
import Layanan from "./pages/Layanan";
import Fitur from "./pages/Fitur";
import Kontak from "./pages/Kontak";
import Pengaduan from "./pages/Pengaduan";
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
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route path="/status" element={<Status />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/pengaduan" element={<Pengaduan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
