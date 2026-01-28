import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";

// Pages
import Home from "@/pages/Home";
import BuyLeads from "@/pages/BuyLeads";
import About from "@/pages/About";
import Testimonials from "@/pages/Testimonials";
import FAQs from "@/pages/FAQs";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

/**
 * Main App component
 * Sets up routing and global providers
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/buy-leads" element={<BuyLeads />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faqs" element={<FAQs />} />

            {/* Authentication Pages */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Checkout */}
            <Route path="/checkout" element={<Checkout />} />

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
