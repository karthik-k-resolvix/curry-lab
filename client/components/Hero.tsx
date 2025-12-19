import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/15 rounded-full border border-primary/40">
            <span className="text-sm font-medium text-primary">
              🚀 AI Automation Platform
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-foreground">
            Automate 80% of Your Business Operations With AI
            <span className="block text-primary">
              — Without Changing Your Existing Tools
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Resolvix builds custom AI systems that eliminate manual work, improve
            customer experience, and give you clarity with real-time insights —
            starting at just <span className="font-semibold">$500</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-12 px-8 text-base"
              onClick={() => scrollToSection("cta")}
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
              <p className="text-sm text-muted-foreground">
                Of manual work automated
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3-10</div>
              <p className="text-sm text-muted-foreground">
                Days to deployment
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">
                Automated system uptime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
