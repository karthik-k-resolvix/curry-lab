import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import {
  BarChart3,
  Eye,
  Calculator,
  TrendingUp,
  Headphones,
  Image,
  MessageSquare,
  Target,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Weekly & Monthly Business Reports",
    subtitle: "Auto-Generated",
    description:
      "Your entire business performance — analyzed and summarized by AI.",
    benefits: [
      "Sales & revenue breakdown",
      "Support volume + team efficiency",
      "Customer sentiment",
      "Top issues & insights",
      "Recommended actions for next 7/30 days",
    ],
    why: "You save 10–20 hours every month and always know what's happening.",
  },
  {
    icon: Eye,
    title: "Competitor Ads Monitoring",
    subtitle: "+ AI Content Ideas",
    description: "No more guessing what content to create.",
    benefits: [
      "Weekly monitoring of competitor ad libraries",
      "Alerts on new campaigns",
      "AI-generated content ideas tailored to your industry",
      "Ready-to-post captions & carousel copy",
    ],
    why: "You always stay a step ahead of competitors.",
  },
  {
    icon: Calculator,
    title: "AI Accounting Assistant",
    subtitle: "90% Automation",
    description: "Automate 90% of your accounting data entry.",
    benefits: [
      "Invoice reading",
      "Expense categorization",
      "Vendor summaries",
      "Data entry into Sheets/Zoho/Tally/Xero",
      "Monthly reconciliation",
    ],
    why: "Zero manual errors. Zero typing.",
  },
  {
    icon: TrendingUp,
    title: "Inventory Planning & Forecasting",
    subtitle: "Reports",
    description: "AI-driven forecasting that considers real-world market conditions.",
    benefits: [
      "Seasonal trends & demand spikes",
      "Supplier timelines",
      "Customer sentiment analysis",
      "Historical sales evaluation",
      "SKU-level reorder suggestions & stock-out alerts",
    ],
    why: "You never overstock or run out again.",
  },
  {
    icon: Headphones,
    title: "AI Customer Support",
    subtitle: "& Personalization Engine",
    description: "Turn your inbox into a fully automated support desk.",
    benefits: [
      "Email classification & auto-drafted replies",
      "Refund/return insights",
      "Ticket summaries",
      "Customer personalization based on past orders",
      "Fraud/penalty scoring",
    ],
    why: "Support becomes 3× faster and more consistent.",
  },
  {
    icon: Image,
    title: "AI-Led Carousel Posting",
    subtitle: "Automation",
    description: "Professional carousels created and posted automatically.",
    benefits: [
      "Brand-specific carousel creation",
      "AI copywriting (hook, story, caption)",
      "Image enhancement + logo placement",
      "Auto-posting to Instagram & LinkedIn",
      "Consistent daily content delivery",
    ],
    why: "Daily content without needing a designer.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots for Every Function",
    subtitle: "Sales, Support, Onboarding & More",
    description: "Custom-trained AI bots for all business functions.",
    benefits: [
      "Sales assistant bot",
      "Support triage bot",
      "Website chatbot",
      "WhatsApp ordering bot",
      "Appointment scheduling & internal knowledge bot",
    ],
    why: "24/7 responses → higher conversions & happier customers.",
  },
  {
    icon: Target,
    title: "Lead Scoring & Hyper-Personalization",
    subtitle: "AI-Powered Intelligence",
    description: "AI evaluates every lead based on intent, behavior & profile.",
    benefits: [
      "Company intel extraction",
      "Buying intent detection",
      "Urgency assessment",
      "Sentiment analysis",
      "Personalized messaging & conversion probability",
    ],
    why: "Your team focuses on the hottest leads first.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            ⭐ What We Do
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            AI Automations That Increase Revenue & Reduce Workload
          </p>
        </div>

        {/* FutureOS Platform Introduction */}
        <div className="mb-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-primary/15 rounded-xl flex items-center justify-center border border-primary/25 flex-shrink-0">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Platform
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    FutureOS
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  The AI operations platform that orchestrates workflows across your existing tools, 
                  with guardrails, audit trails, and real-time insights.
                </p>
                <p className="text-base text-muted-foreground">
                  Get customizable AI automation services tailored to your business needs. 
                  Mix and match services, integrate with your existing tools, and scale as you grow.
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">
                <span className="text-foreground font-semibold">Works with:</span> Gmail, WhatsApp, 
                Google Sheets, Shopify, HubSpot, Zoho, ERPs, CRMs, and more.
              </p>
            </div>
          </Card>
        </div>

        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground text-center">
          Customizable Services Available on FutureOS
        </h3>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose the services that fit your business. Each service can be customized and integrated 
          seamlessly with your existing workflows and tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg cursor-pointer group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h4 className="font-heading font-bold text-lg mb-1 text-foreground">
                  {service.title}
                </h4>
                <p className="text-sm text-primary font-semibold mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-foreground font-semibold">
                    <span className="text-primary">Why it matters:</span>{" "}
                    {service.why}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
