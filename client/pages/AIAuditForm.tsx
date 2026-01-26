import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  name: string;
  companyName: string;
  websiteUrl: string;
  whatsappNumber: string;
  productsServicesSummary: string;
  monthlyOrderVolume: string;
  whereDoYouSell: string;
  customerEscalation: string;
  customerSupportAutomation: string;
  commonCustomerQueries: string;
  orderUpdatesAutomated: string;
  primaryMarketingChannel: string;
  monthlyAdSpend: string;
  inventoryManagementChallenges: string;
  biggestChallenge: string;
  usedAIToolsBefore: string;
  previousAutomationMethod: string;
  timeSpentOnRepetitiveTasks: string;
  successIn6Months: string;
  whenToImplement: string;
  monthlyInvestment: string;
  anythingElse: string;
}

export default function AIAuditForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const usedAIToolsBefore = watch("usedAIToolsBefore");
  
  // Register radio fields for validation
  register("monthlyOrderVolume", { required: "Monthly order volume is required" });
  register("whereDoYouSell", { required: "Please select where you sell" });
  register("customerEscalation", { required: "Please select customer escalation method" });
  register("customerSupportAutomation", { required: "Please select automation status" });
  register("commonCustomerQueries", { required: "Please select common queries" });
  register("orderUpdatesAutomated", { required: "Please select automation status" });
  register("primaryMarketingChannel", { required: "Please select marketing channel" });
  register("monthlyAdSpend", { required: "Please select ad spend range" });
  register("inventoryManagementChallenges", { required: "Please select inventory challenges" });
  register("biggestChallenge", { required: "Please select biggest challenge" });
  register("usedAIToolsBefore", { required: "Please select AI tools usage" });
  register("timeSpentOnRepetitiveTasks", { required: "Please select time spent" });
  register("successIn6Months", { required: "Please select success metric" });
  register("whenToImplement", { required: "Please select implementation timeline" });
  register("monthlyInvestment", { required: "Please select investment range" });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/audit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10 px-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold mb-2 text-foreground">
              Thank You!
            </h2>
            <p className="text-muted-foreground mb-4">
              Your form has been submitted successfully. We'll get back to you soon.
            </p>
            <p className="text-sm text-muted-foreground">
              Redirecting to homepage...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-foreground">
            AI Audit
          </h1>
          <p className="text-muted-foreground">
            Hey! Welcome to Resolvix. Please fill this form with as much information as possible
            to help us understand your brand and the automation currently.
          </p>
        </div>

        <Card className="p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-semibold text-foreground border-b pb-2">
                Contact Information
              </h2>

              <div>
                <Label htmlFor="email">
                  Preferred E-mail of contact <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="mt-2"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="name">
                  Your Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="mt-2"
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="companyName">
                  Brand/Company Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="companyName"
                  {...register("companyName", { required: "Company name is required" })}
                  className="mt-2"
                />
                {errors.companyName && (
                  <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="websiteUrl">
                  Website URL <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="websiteUrl"
                  type="url"
                  {...register("websiteUrl", { required: "Website URL is required" })}
                  className="mt-2"
                  placeholder="https://example.com"
                />
                {errors.websiteUrl && (
                  <p className="text-sm text-destructive mt-1">{errors.websiteUrl.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
                <Input
                  id="whatsappNumber"
                  type="tel"
                  {...register("whatsappNumber")}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="productsServicesSummary">
                  Kindly provide a very small summary of your products/services
                </Label>
                <Textarea
                  id="productsServicesSummary"
                  {...register("productsServicesSummary")}
                  className="mt-2"
                  rows={3}
                />
              </div>
            </div>

            {/* Business Operations */}
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-semibold text-foreground border-b pb-2">
                Business Operations
              </h2>

              <div>
                <Label>
                  Monthly Order Volume <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("monthlyOrderVolume", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="< 100" id="volume1" />
                    <Label htmlFor="volume1" className="font-normal cursor-pointer">
                      &lt; 100
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="100 - 500" id="volume2" />
                    <Label htmlFor="volume2" className="font-normal cursor-pointer">
                      100 - 500
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="500 - 1000" id="volume3" />
                    <Label htmlFor="volume3" className="font-normal cursor-pointer">
                      500 - 1000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1000 - 5000" id="volume4" />
                    <Label htmlFor="volume4" className="font-normal cursor-pointer">
                      1000 - 5000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="> 5000" id="volume5" />
                    <Label htmlFor="volume5" className="font-normal cursor-pointer">
                      &gt; 5000
                    </Label>
                  </div>
                </RadioGroup>
                {errors.monthlyOrderVolume && (
                  <p className="text-sm text-destructive mt-1">{errors.monthlyOrderVolume.message}</p>
                )}
              </div>

              <div>
                <Label>
                  Where do you sell? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("whereDoYouSell", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Shopify" id="sell1" />
                    <Label htmlFor="sell1" className="font-normal cursor-pointer">Shopify</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="WooCommerce" id="sell2" />
                    <Label htmlFor="sell2" className="font-normal cursor-pointer">WooCommerce</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Amazon/Flipkart" id="sell3" />
                    <Label htmlFor="sell3" className="font-normal cursor-pointer">Amazon/Flipkart</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Instagram/Whatsapp" id="sell4" />
                    <Label htmlFor="sell4" className="font-normal cursor-pointer">Instagram/Whatsapp</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Own Website" id="sell5" />
                    <Label htmlFor="sell5" className="font-normal cursor-pointer">Own Website</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Multiple platforms" id="sell6" />
                    <Label htmlFor="sell6" className="font-normal cursor-pointer">Multiple platforms</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="D2C" id="sell7" />
                    <Label htmlFor="sell7" className="font-normal cursor-pointer">D2C</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Own app" id="sell8" />
                    <Label htmlFor="sell8" className="font-normal cursor-pointer">Own app</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>
                  How do customers escalate/reach out to you? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("customerEscalation", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Whatsapp" id="escalate1" />
                    <Label htmlFor="escalate1" className="font-normal cursor-pointer">Whatsapp</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Instagram DM" id="escalate2" />
                    <Label htmlFor="escalate2" className="font-normal cursor-pointer">Instagram DM</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Email" id="escalate3" />
                    <Label htmlFor="escalate3" className="font-normal cursor-pointer">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Phone" id="escalate4" />
                    <Label htmlFor="escalate4" className="font-normal cursor-pointer">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Website Chat" id="escalate5" />
                    <Label htmlFor="escalate5" className="font-normal cursor-pointer">Website Chat</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Marketplace" id="escalate6" />
                    <Label htmlFor="escalate6" className="font-normal cursor-pointer">Marketplace</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Automation & Support */}
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-semibold text-foreground border-b pb-2">
                Automation & Support
              </h2>

              <div>
                <Label>
                  Do you have any customer support automation? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("customerSupportAutomation", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" id="support1" />
                    <Label htmlFor="support1" className="font-normal cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="support2" />
                    <Label htmlFor="support2" className="font-normal cursor-pointer">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Partial" id="support3" />
                    <Label htmlFor="support3" className="font-normal cursor-pointer">Partial</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>
                  Most common customer queries? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("commonCustomerQueries", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Order Status" id="query1" />
                    <Label htmlFor="query1" className="font-normal cursor-pointer">Order Status</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Product Questions" id="query2" />
                    <Label htmlFor="query2" className="font-normal cursor-pointer">Product Questions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Returns/Exchange" id="query3" />
                    <Label htmlFor="query3" className="font-normal cursor-pointer">Returns/Exchange</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Payment Issues" id="query4" />
                    <Label htmlFor="query4" className="font-normal cursor-pointer">Payment Issues</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Delivery Delays" id="query5" />
                    <Label htmlFor="query5" className="font-normal cursor-pointer">Delivery Delays</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Other" id="query6" />
                    <Label htmlFor="query6" className="font-normal cursor-pointer">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>
                  Are order updates, returns, exchanges automated? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("orderUpdatesAutomated", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" id="order1" />
                    <Label htmlFor="order1" className="font-normal cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="order2" />
                    <Label htmlFor="order2" className="font-normal cursor-pointer">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Partial" id="order3" />
                    <Label htmlFor="order3" className="font-normal cursor-pointer">Partial</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Marketing & Inventory */}
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-semibold text-foreground border-b pb-2">
                Marketing & Inventory
              </h2>

              <div>
                <Label>
                  Primary marketing channel? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("primaryMarketingChannel", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Instagram Ads" id="marketing1" />
                    <Label htmlFor="marketing1" className="font-normal cursor-pointer">Instagram Ads</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Google Ads" id="marketing2" />
                    <Label htmlFor="marketing2" className="font-normal cursor-pointer">Google Ads</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Facebook Ads" id="marketing3" />
                    <Label htmlFor="marketing3" className="font-normal cursor-pointer">Facebook Ads</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Influencer Marketing" id="marketing4" />
                    <Label htmlFor="marketing4" className="font-normal cursor-pointer">Influencer Marketing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Organic/SEO" id="marketing5" />
                    <Label htmlFor="marketing5" className="font-normal cursor-pointer">Organic/SEO</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Multiple Channels" id="marketing6" />
                    <Label htmlFor="marketing6" className="font-normal cursor-pointer">Multiple Channels</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>
                  Monthly Ad Spend? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("monthlyAdSpend", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="< Rs 50K" id="spend1" />
                    <Label htmlFor="spend1" className="font-normal cursor-pointer">&lt; Rs 50K</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="50k - 2L" id="spend2" />
                    <Label htmlFor="spend2" className="font-normal cursor-pointer">50k - 2L</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2L - 5L" id="spend3" />
                    <Label htmlFor="spend3" className="font-normal cursor-pointer">2L - 5L</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5L - 10L" id="spend4" />
                    <Label htmlFor="spend4" className="font-normal cursor-pointer">5L - 10L</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="> 10L" id="spend5" />
                    <Label htmlFor="spend5" className="font-normal cursor-pointer">&gt; 10L</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>
                  Inventory management challenges? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("inventoryManagementChallenges", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Frequent Stockouts" id="inventory1" />
                    <Label htmlFor="inventory1" className="font-normal cursor-pointer">Frequent Stockouts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Over stocking" id="inventory2" />
                    <Label htmlFor="inventory2" className="font-normal cursor-pointer">Over stocking</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Both options" id="inventory3" />
                    <Label htmlFor="inventory3" className="font-normal cursor-pointer">Both options</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Well managed" id="inventory4" />
                    <Label htmlFor="inventory4" className="font-normal cursor-pointer">Well managed</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Challenges & Goals */}
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-semibold text-foreground border-b pb-2">
                Challenges & Goals
              </h2>

              <div>
                <Label>
                  What's your biggest challenge right now? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("biggestChallenge", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Customer Support Overload" id="challenge1" />
                    <Label htmlFor="challenge1" className="font-normal cursor-pointer">Customer Support Overload</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Manual Order Processing" id="challenge2" />
                    <Label htmlFor="challenge2" className="font-normal cursor-pointer">Manual Order Processing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Ad Performance" id="challenge3" />
                    <Label htmlFor="challenge3" className="font-normal cursor-pointer">Ad Performance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Inventory Issues" id="challenge4" />
                    <Label htmlFor="challenge4" className="font-normal cursor-pointer">Inventory Issues</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Team Bandwidth" id="challenge5" />
                    <Label htmlFor="challenge5" className="font-normal cursor-pointer">Team Bandwidth</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Multiple issues" id="challenge6" />
                    <Label htmlFor="challenge6" className="font-normal cursor-pointer">Multiple issues</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>
                  Have you used AI tools before? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("usedAIToolsBefore", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" id="ai1" />
                    <Label htmlFor="ai1" className="font-normal cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="ai2" />
                    <Label htmlFor="ai2" className="font-normal cursor-pointer">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Tried but failed" id="ai3" />
                    <Label htmlFor="ai3" className="font-normal cursor-pointer">Tried but failed</Label>
                  </div>
                </RadioGroup>
              </div>

              {usedAIToolsBefore === "Yes" && (
                <div>
                  <Label>
                    If yes, how did you do the automation previously?
                  </Label>
                  <RadioGroup
                    className="mt-2"
                    onValueChange={(value) => setValue("previousAutomationMethod", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Inhouse dev team" id="prev1" />
                      <Label htmlFor="prev1" className="font-normal cursor-pointer">Inhouse dev team</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Vibe coding" id="prev2" />
                      <Label htmlFor="prev2" className="font-normal cursor-pointer">Vibe coding</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Outsourcing" id="prev3" />
                      <Label htmlFor="prev3" className="font-normal cursor-pointer">Outsourcing</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <div>
                <Label>
                  How much time does your team spend daily on repetitive tasks? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("timeSpentOnRepetitiveTasks", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="< 2 hours" id="time1" />
                    <Label htmlFor="time1" className="font-normal cursor-pointer">&lt; 2 hours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2 - 4 hours" id="time2" />
                    <Label htmlFor="time2" className="font-normal cursor-pointer">2 - 4 hours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4 - 6 hours" id="time3" />
                    <Label htmlFor="time3" className="font-normal cursor-pointer">4 - 6 hours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="6 - 8 hours" id="time4" />
                    <Label htmlFor="time4" className="font-normal cursor-pointer">6 - 8 hours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="8+ hours" id="time5" />
                    <Label htmlFor="time5" className="font-normal cursor-pointer">8+ hours</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>
                  What would success look like for you in 6 months? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("successIn6Months", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="50% Less Support time" id="success1" />
                    <Label htmlFor="success1" className="font-normal cursor-pointer">50% Less Support time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2x Sales Growth" id="success2" />
                    <Label htmlFor="success2" className="font-normal cursor-pointer">2x Sales Growth</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Better CX" id="success3" />
                    <Label htmlFor="success3" className="font-normal cursor-pointer">Better CX</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Lower Costs" id="success4" />
                    <Label htmlFor="success4" className="font-normal cursor-pointer">Lower Costs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Scale Without Hiring" id="success5" />
                    <Label htmlFor="success5" className="font-normal cursor-pointer">Scale Without Hiring</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Implementation */}
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-semibold text-foreground border-b pb-2">
                Implementation
              </h2>

              <div>
                <Label>
                  When do you want to implement AI automation? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("whenToImplement", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ASAP" id="when1" />
                    <Label htmlFor="when1" className="font-normal cursor-pointer">ASAP</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1 month" id="when2" />
                    <Label htmlFor="when2" className="font-normal cursor-pointer">1 month</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2 - 3 months" id="when3" />
                    <Label htmlFor="when3" className="font-normal cursor-pointer">2 - 3 months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Just Exploring" id="when4" />
                    <Label htmlFor="when4" className="font-normal cursor-pointer">Just Exploring</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>
                  How much are you likely invest in your AI automation per month <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  className="mt-2"
                  onValueChange={(value) => setValue("monthlyInvestment", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="< 200 USD" id="invest1" />
                    <Label htmlFor="invest1" className="font-normal cursor-pointer">&lt; 200 USD</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="200 - 500 USD" id="invest2" />
                    <Label htmlFor="invest2" className="font-normal cursor-pointer">200 - 500 USD</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="500 - 1000 USD" id="invest3" />
                    <Label htmlFor="invest3" className="font-normal cursor-pointer">500 - 1000 USD</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1000 - 2000 USD" id="invest4" />
                    <Label htmlFor="invest4" className="font-normal cursor-pointer">1000 - 2000 USD</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="> 2000 USD" id="invest5" />
                    <Label htmlFor="invest5" className="font-normal cursor-pointer">&gt; 2000 USD</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="anythingElse">
                  Anything else that you would like to know
                </Label>
                <Textarea
                  id="anythingElse"
                  {...register("anythingElse")}
                  className="mt-2"
                  rows={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-12 px-8 text-base flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/5 text-primary rounded-lg font-semibold h-12 px-8"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
