
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from '@/lib/utils';

const pricing = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out the platform",
    features: [
      "5 videos per month",
      "720p max resolution",
      "Basic caption styles",
      "SRT export",
      "2 languages"
    ],
    popular: false,
    buttonText: "Start Free"
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For content creators and professionals",
    features: [
      "50 videos per month",
      "4K resolution support",
      "Advanced caption styles",
      "All export formats",
      "20+ languages",
      "Priority processing"
    ],
    popular: true,
    buttonText: "Go Pro"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For businesses with high-volume needs",
    features: [
      "Unlimited videos",
      "8K resolution support",
      "Custom caption templates",
      "API access",
      "40+ languages",
      "Dedicated support",
      "Custom branding"
    ],
    popular: false,
    buttonText: "Contact Us"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "bg-background rounded-xl border shadow-sm overflow-hidden animate-fade-in",
                plan.popular ? "relative border-primary shadow-md" : "",
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.period && <span className="ml-1 text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="mt-2 text-muted-foreground">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn("w-full mt-8", plan.popular ? "" : "variant-outline")}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
