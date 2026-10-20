import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header } from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BookkeepingPage from "./pages/BookkeepingPage";
import BusinessServicesPage from "./pages/BusinessServicesPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import IndustriesPage from "./pages/IndustriesPage";
import LifeInsurancePage from "./pages/LifeInsurancePage";
import PackagesPage from "./pages/PackagesPage";
import PayrollPage from "./pages/PayrollPage";
import PricingPage from "./pages/PricingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ResourceArticlePage, { TaxDeadlinesPage } from "./pages/ResourceArticlePage";
import ResourcesPage from "./pages/ResourcesPage";
import TaxServicesPage from "./pages/TaxServicesPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      let attempts = 0;
      let timer: number | undefined;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 25) {
          attempts++;
          timer = window.setTimeout(tryScroll, 40);
        }
      };

      timer = window.setTimeout(tryScroll, 30);
      return () => {
        if (timer) window.clearTimeout(timer);
      };
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden bg-cream">
        <ScrollManager />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tax-services" element={<TaxServicesPage />} />
            <Route path="/bookkeeping" element={<BookkeepingPage />} />
            <Route path="/payroll" element={<PayrollPage />} />
            <Route path="/business-services" element={<BusinessServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/tax-deadlines-calendar" element={<TaxDeadlinesPage />} />
            <Route path="/resources/:slug" element={<ResourceArticlePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/life-insurance" element={<LifeInsurancePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
