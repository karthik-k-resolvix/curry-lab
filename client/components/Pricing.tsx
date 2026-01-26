import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "One-Time Setup Fee",
    price: "Starting at $500",
    description: "For standard automation setup.",
    highlight: false,
    features: [
      "Initial consultation",
      "System architecture design",
      "Tool integration setup",
      "Basic testing & validation",
    ],
  },
  {
    title: "Custom Automation Workflows",
    price: "$300",
    description: "Per unique workflow.",
    highlight: true,
    features: [
      "Tailored to your process",
      "Full AI training & setup",
      "Integration with your tools",
      "Testing & optimization",
      "Documentation provided",
    ],
  },
  {
    title: "Monthly Retainer",
    price: "$400/month",
    description: "Ongoing support & optimization.",
    highlight: false,
    features: [
      "Monitoring & maintenance",
      "System optimization",
      "Bug fixes & updates",
      "Unlimited improvements",
      "Performance analytics",
    ],
  },
];

export default function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            💼 Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for every stage of your automation journey
          </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us understand your requirements today to get the quotation!
            <br/>
          </p>
           <Button onClick={() => scrollToSection("cta")}>
                  Get Started
                </Button>
        </div>

        <div className="bg-background border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
            Why Resolvix?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="font-bold text-primary mb-2">Expertise That Scales</p>
              <p className="text-sm text-muted-foreground">
                Deep knowledge of AI, automation, business operations, and
                real-world process optimization.
              </p>
            </div>
            <div>
              <p className="font-bold text-primary mb-2">Fast Delivery</p>
              <p className="text-sm text-muted-foreground">
                Most systems go live in 3–10 days. No lengthy implementations.
              </p>
            </div>
            <div>
              <p className="font-bold text-primary mb-2">Zero-Disruption</p>
              <p className="text-sm text-muted-foreground">
                We integrate with your current tools — no new software required.
              </p>
            </div>
            <div>
              <p className="font-bold text-secondary mb-2">Ongoing Optimization</p>
              <p className="text-sm text-muted-foreground">
                As your business grows, your automations evolve with it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
