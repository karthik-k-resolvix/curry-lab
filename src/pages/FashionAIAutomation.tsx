import { Link } from "react-router-dom";
import { Button } from "../../client/components/ui/button";
import { Card, CardContent } from "../../client/components/ui/card";
import { useEffect, useState } from "react";
import { logEvent } from "../../client/lib/log";

export default function FashionAIAutomation() {
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
    logEvent('book_audit_clicked', { page: 'fashion' }, 'info');
    window.location.href = 'https://calendly.com/karthik-k-resolvix/30min?redirect_url=http://localhost:8080/';
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section">
        <div className="section-center">
          <span className="inline-block text-sm text-primary font-medium mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            Fashion & Apparel
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Automation for Fashion & Apparel Brands
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Using AI to improve demand forecasting, inventory planning,
            merchandising automation, and returns management in fashion
            businesses.
          </p>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="section">
        <div className="section-wide space-y-16">
          {/* Challenge Section */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">
                The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fashion and apparel brands struggle with unpredictable demand patterns,
                complex inventory management across multiple channels, and high return
                rates. Manual processes for merchandising, demand forecasting, and
                returns processing create inefficiencies that impact profitability and
                customer satisfaction.
              </p>
            </CardContent>
          </Card>

          {/* Solution Section */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">
                The Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We implemented AI-powered automation systems that connect with e-commerce
                platforms, inventory management systems, and supply chain tools. The
                solution includes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>AI-driven demand forecasting and inventory optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Automated merchandising and product catalog management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Intelligent returns processing and restocking workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Multi-channel inventory synchronization and allocation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">
                Results & Impact
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The AI automation platform delivered substantial improvements in
                operational efficiency and profitability:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <p className="text-sm text-muted-foreground">Reduction in excess inventory</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <p className="text-sm text-muted-foreground">Faster returns processing time</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <p className="text-sm text-muted-foreground">Improvement in forecast accuracy</p>
                </div>
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
              Ready to optimize your fashion operations?
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
