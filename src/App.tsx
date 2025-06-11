
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SoilResults from "./pages/SoilResults";
import AnalysisHistory from "./pages/AnalysisHistory";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import FarmManagement from "./pages/FarmManagement";
import Trends from "./pages/Trends";
import Calendar from "./pages/Calendar";
import Database from "./pages/Database";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
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
          <Route path="/soil-results" element={<SoilResults />} />
          <Route path="/analysis-history" element={<AnalysisHistory />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/farm-management" element={<FarmManagement />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/database" element={<Database />} />
          <Route path="/team" element={<Team />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
