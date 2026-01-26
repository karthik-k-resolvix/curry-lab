import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Resources from "../src/pages/Resources";
import EcommerceAIAutomation from "../src/pages/EcommerceAIAutomation";
import InsuranceAIAutomation from "../src/pages/InsuranceAIAutomation";
import FashionAIAutomation from "../src/pages/FashionAIAutomation";
import AIAuditForm from "./pages/AIAuditForm";
// import FutureOSApply from "./pages/FutureOSApply";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-background">
    <Header />
    <main className="flex-1 pt-16">
      {children}
    </main>
    <Footer />
  </div>
);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Index />
                </Layout>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route
              path="/resources"
              element={
                <Layout>
                  <Resources />
                </Layout>
              }
            />
            <Route
              path="/resources/ecommerce-ai-automation"
              element={
                <Layout>
                  <EcommerceAIAutomation />
                </Layout>
              }
            />
            <Route
              path="/resources/insurance-ai-automation"
              element={
                <Layout>
                  <InsuranceAIAutomation />
                </Layout>
              }
            />
            <Route
              path="/resources/fashion-ai-automation"
              element={
                <Layout>
                  <FashionAIAutomation />
                </Layout>
              }
            />
            <Route
              path="/ai-audit"
              element={
                <Layout>
                  <AIAuditForm />
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
            {/* <Route path="/futureos-access" element={<FutureOSAccess />} />
        <Route path="/futureos-access/apply" element={<FutureOSApply />} /> */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
