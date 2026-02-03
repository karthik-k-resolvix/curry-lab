import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { logEvent } from "@/lib/log";

export default function Hero() {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleCalendly = () => {
    logEvent('book_audit_clicked', { from: 'hero' }, 'info');
    window.location.href = 'https://calendly.com/karthik-k-resolvix/30min?redirect_url=http://localhost:8080/';
  };

  return (
    <section className="section-hero">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center animate-fade-in-up">

          {/* FutureOS Launch Callout with CTA */}
          <div className="card-panel mb-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3 text-left sm:items-center">
                <div className="mt-0.5 sm:mt-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 border border-primary/25">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      New Platform
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-foreground">
                      Introducing <span className="text-primary">FutureOS</span>
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The AI operations platform that orchestrates workflows across your existing tools, with guardrails, audit trails, and real-time insights.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-10 px-4"
                  onClick={() => { logEvent('see_demo_clicked', { from: 'hero' }, 'info'); scrollToSection("services"); }}
                >
                  Explore FutureOS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </div>
            </div>
          </div>

          {/* Existing badge */}
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <span className="text-sm font-medium text-primary">
              AI Automation Platform
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6 text-foreground">
            Automate 80% of Your Business Operations With AI
            <span className="block text-primary">
              Without Changing Your Existing Tools
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Resolvix builds custom AI systems on top of <span className="text-foreground/90 font-medium">FutureOS</span> to eliminate manual work,
            improve customer experience, and give you clarity with real-time insights.
          </p>

          <div className="cta-buttons">
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
              onClick={() => scrollToSection("services")}
            >
              See Demo Workflows
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">80%</div>
              <p className="text-sm text-muted-foreground">Of manual work automated</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3–10</div>
              <p className="text-sm text-muted-foreground">Days to deployment</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Automated system uptime</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
