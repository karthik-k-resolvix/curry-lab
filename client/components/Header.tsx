import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </button>
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
            onClick={() => scrollToSection("cta")}
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
                onClick={() => scrollToSection("cta")}
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
