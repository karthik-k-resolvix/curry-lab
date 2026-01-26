import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyReady(true);
    document.body.appendChild(script);
    return () => { 
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleCalendly = () => {
    console.log('I am here5');
    window.location.href = 'https://calendly.com/karthik-k-resolvix/30min?redirect_url=http://localhost:8080/';
    // logEvent('booking calendly demo', { }, 'info', 'demo');
  };

  // Added: supports safe navigation to sections when not on homepage
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    // If element exists on current page, scroll as before (existing functionality preserved)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    // Added: if not on homepage (or element not present), navigate home then scroll
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Wait a tick for home to render, then try to scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }

    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/Logo.png"
              width={36}
              height={36}
              alt="Resolvix logo"
              className="block"
            />
          </Link>

          <span className="font-heading font-bold text-xl text-foreground hidden sm:block">
            Resolvix
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>

          {/* Added: Case Studies / Resources route */}
          <span className="relative">
          <Link
            to="/resources"
            className="text-foreground hover:text-primary transition-colors"
          >
            Case Studies
          </Link>
           <span className="absolute -top-2 -right-4 text-[8px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
    New
  </span>
  </span>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-foreground hover:text-primary transition-colors"
          >
            FAQ
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => scrollToSection("cta")}
            className="border-primary text-primary hover:bg-primary/5"
          >
            See Demo
          </Button>
          <Button
            onClick={handleCalendly}
            className="bg-primary hover:bg-primary/90"
          >
            Book Audit
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </button>

            {/* Added: Case Studies / Resources route */}
            <Link
              to="/resources"
              onClick={() => setIsOpen(false)}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Case Studies
            </Link>

            <button
              onClick={() => scrollToSection("pricing")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              FAQ
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => scrollToSection("cta")}
                className="w-full border-primary text-primary"
              >
                See Demo
              </Button>
              <Button
                onClick={handleCalendly}
                className="w-full bg-primary"
              >
                Book Audit
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
