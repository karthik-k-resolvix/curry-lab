import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CTA() {
  const navigate = useNavigate();
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
  return (
    <section id="cta" className="py-20 px-4 bg-gradient-to-r from-primary/12 via-background to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
          📞 Ready to Automate Your Business?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let us show you the workflows that will save you the most time and money.
          Book a free consultation with our automation experts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-12 px-8 text-base"
            onClick={handleCalendly}
          >
            Book a Free Automation Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/5 text-primary rounded-lg font-semibold h-12 px-8 text-base"
           onClick={handleCalendly}
          >
           Try Free Audit Today!
          </Button>
        </div>

        <div className="mt-10 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Available 24/7 via email or scheduled call
          </p>
          <a
            href="mailto:hello@resolvix.com"
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            info@resolvix.tech
          </a>
        </div>
      </div>
    </section>
  );
}
