import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most automations go live within a week. We work quickly to get your systems running while maintaining quality. Simple integrations can be live in 3-5 days, while more complex custom workflows may take 7-10 days.",
  },
  {
    question: "Do you integrate with my current tools?",
    answer:
      "Yes — Gmail, WhatsApp, Shopify, Tally, HubSpot, Sheets, and more. We work with most popular business tools and ERPs. If you use a specialized system, we can usually integrate with it through APIs or custom connectors.",
  },
  {
    question: "What's covered in the monthly retainer?",
    answer:
      "Enhancements, fixes, monitoring, and ongoing optimization. Your $400/month retainer includes system health monitoring, performance optimization, bug fixes, feature enhancements, and unlimited iterations to keep your automations running smoothly and evolving with your business needs.",
  },
  {
    question: "Can you build highly custom workflows?",
    answer:
      "Yes — each custom workflow costs $300. We can build automations tailored to your specific business processes, no matter how unique. From custom data processing to complex multi-step workflows, we've got you covered.",
  },
  {
    question: "Do I need to replace my existing software?",
    answer:
      "No. We integrate directly into your current tools. Our automations work alongside your existing systems without requiring any replacements or major changes to your workflow.",
  },
  {
    question: "What's included in the free automation audit?",
    answer:
      "We analyze your current processes, identify automation opportunities, estimate time savings, outline integration requirements, and provide a custom proposal with specific workflows we can implement for your business.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            📚 Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <span className="font-semibold text-foreground text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-primary/5 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/30 text-center">
          <p className="text-sm text-muted-foreground mb-2">Still have questions?</p>
          <p className="text-lg font-semibold text-foreground mb-4">
            Let's discuss your automation needs
          </p>
          <a
            href="mailto:hello@resolvix.com"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Contact us at hello@resolvix.com →
          </a>
        </div>
      </div>
    </section>
  );
}
