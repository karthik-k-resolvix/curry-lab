import { Link } from "react-router-dom";
import { Button } from "../../client/components/ui/button";
import { Card, CardContent } from "../../client/components/ui/card";
import { useEffect, useState } from "react";
import { logEvent } from "../../client/lib/log";

export default function Resources() {
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
    logEvent('book_audit_clicked', { page: 'resources' }, 'info');
    window.location.href = 'https://calendly.com/karthik-k-resolvix/30min?redirect_url=http://localhost:8080/';
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section">
        <div className="section-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Automation Case Studies
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Real-world AI automation use cases across industries. Each case study
            highlights operational bottlenecks, automation opportunities, and
            measurable business impact.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/#cta" onClick={() => logEvent('cta_clicked', { page: 'resources' }, 'info')}>Get a Free AI Audit</Link>
          </Button>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* E-commerce */}
          <Card className="bg-card border-border h-full flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <span className="text-sm text-primary font-medium mb-2">
                E-Commerce
              </span>
              <h2 className="font-heading text-xl font-semibold mb-3">
                AI Automation for E-Commerce Operations
              </h2>
              <p className="text-muted-foreground mb-6">
                How AI-driven workflows reduce manual order processing, automate
                customer support, and deliver real-time sales intelligence for
                high-volume e-commerce businesses.
              </p>

              <div className="mt-auto">
                <Button asChild variant="outline">
                  <Link to="/resources/ecommerce-ai-automation">
                    View Case Study
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Insurance */}
          <Card className="bg-card border-border h-full flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <span className="text-sm text-primary font-medium mb-2">
                Insurance
              </span>
              <h2 className="font-heading text-xl font-semibold mb-3">
                AI Automation in Insurance Operations
              </h2>
              <p className="text-muted-foreground mb-6">
                Streamlining claims processing, underwriting support, and policy
                servicing using AI to reduce turnaround times and operational
                costs.
              </p>

              <div className="mt-auto">
                <Button asChild variant="outline">
                  <Link to="/resources/insurance-ai-automation">
                    View Case Study
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>


          {/* Fashion */}
          <Card className="bg-card border-border h-full flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <span className="text-sm text-primary font-medium mb-2">
                Fashion & Apparel
              </span>
              <h2 className="font-heading text-xl font-semibold mb-3">
                AI Automation for Fashion & Apparel Brands
              </h2>
              <p className="text-muted-foreground mb-6">
                Using AI to improve demand forecasting, inventory planning,
                merchandising automation, and returns management in fashion
                businesses.
              </p>

              <div className="mt-auto">
                <Button asChild variant="outline">
                  <Link to="/resources/fashion-ai-automation">
                    View Case Study
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section mt-32 pb-20">
        <div className="cta-strip">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-2">
              Unsure where to start with AI automation?
            </h3>
            <p className="text-muted-foreground">
              Get a free, no-obligation AI audit tailored to your business
              workflows.
            </p>
          </div>
          <Button onClick={handleCalendly} className="bg-primary hover:bg-primary/90">
            Book Free AI Audit
          </Button>
        </div>
      </section>
    </div>
  );
}
