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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? "border-primary border-2 shadow-lg md:scale-105 bg-gradient-to-br from-background to-primary/5"
                  : "border border-border hover:border-primary/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                  {plan.title}
                </h3>
                <p className="text-primary font-bold text-3xl mb-2">
                  {plan.price}
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => scrollToSection("cta")}
                  className={
                    plan.highlight
                      ? "w-full bg-primary hover:bg-primary/90 text-white"
                      : "w-full border-primary text-primary hover:bg-primary/5"
                  }
                  variant={plan.highlight ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
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
