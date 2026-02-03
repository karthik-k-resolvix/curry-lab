import { Link } from "react-router-dom";
import { Button } from "../../client/components/ui/button";
import { Card, CardContent } from "../../client/components/ui/card";
import { useEffect, useState } from "react";
import { logEvent } from "../../client/lib/log";

export default function InsuranceAIAutomation() {
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
    logEvent('book_audit_clicked', { page: 'insurance' }, 'info');
    window.location.href = 'https://calendly.com/karthik-k-resolvix/30min?redirect_url=http://localhost:8080/';
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section">
        <div className="section-center">
          <span className="inline-block text-sm text-primary font-medium mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            Insurance
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Automation in Insurance Operations
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Streamlining claims processing, underwriting support, and policy
            servicing using AI to reduce turnaround times and operational
            costs.
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
                Insurance companies face significant operational challenges with lengthy
                claims processing times, manual underwriting workflows, and inefficient
                policy servicing. These bottlenecks lead to customer dissatisfaction,
                increased operational costs, and reduced competitiveness in a rapidly
                evolving market.
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
                We developed comprehensive AI automation systems that integrate with
                existing insurance platforms, document management systems, and customer
                portals. The solution includes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Automated claims intake and initial assessment workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>AI-powered document extraction and data validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Intelligent underwriting support and risk assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Automated policy renewal and servicing workflows</span>
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
                The AI automation implementation delivered significant operational
                improvements and cost savings:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">65%</div>
                  <p className="text-sm text-muted-foreground">Faster claims processing turnaround</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <p className="text-sm text-muted-foreground">Reduction in operational costs</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <p className="text-sm text-muted-foreground">Accuracy in document processing</p>
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
              Ready to transform your insurance operations?
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
