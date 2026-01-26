import { Link } from "react-router-dom";
import { Button } from "../../client/components/ui/button";
import { Card, CardContent } from "../../client/components/ui/card";
import { useEffect, useState } from "react";

export default function EcommerceAIAutomation() {
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm text-primary font-medium mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            E-Commerce
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Automation for E-Commerce Operations
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            How AI-driven workflows reduce manual order processing, automate
            customer support, and deliver real-time sales intelligence for
            high-volume e-commerce businesses.
          </p>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Challenge Section */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">
                The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                High-volume e-commerce businesses struggle with manual order processing,
                customer support bottlenecks, and lack of real-time insights into sales
                performance. Teams spend hours on repetitive tasks like order fulfillment,
                inventory updates, and responding to customer inquiries, limiting their
                ability to focus on growth strategies.
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
                We implemented AI automation workflows that integrate seamlessly with
                existing e-commerce platforms, payment processors, and inventory systems.
                The solution includes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Automated order processing and fulfillment workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>AI-powered customer support chatbots and email responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Real-time sales analytics and inventory management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Automated returns processing and refund workflows</span>
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
                The AI automation system delivered measurable improvements across key
                operational metrics:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">80%</div>
                  <p className="text-sm text-muted-foreground">Reduction in manual order processing time</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Automated customer support availability</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <p className="text-sm text-muted-foreground">Faster response times to customer inquiries</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="container mx-auto px-4 mt-32 pb-20 mb-16">
        <div className="bg-muted rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-2">
              Ready to automate your e-commerce operations?
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
