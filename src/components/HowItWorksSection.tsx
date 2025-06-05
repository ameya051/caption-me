
import React from 'react';
import { Upload, Brain, FileVideo, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: <Upload className="h-8 w-8" />,
    title: "Upload Your Video",
    description: "Simply drag and drop your video file onto our platform or browse to select it from your device.",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    number: "01"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Processing",
    description: "Our advanced AI automatically analyzes the audio and generates accurate captions for your content.",
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    number: "02"
  },
  {
    icon: <FileVideo className="h-8 w-8" />,
    title: "Download & Share",
    description: "Edit if needed, then download your captioned video or export the captions in your preferred format.",
    color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    number: "03"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="secondary" className="mb-2">Simple Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">How CaptionMe Works</h2>
          <p className="text-muted-foreground text-lg">
            Caption your videos in three simple steps
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-background rounded-xl p-6 shadow-sm border card-hover relative z-10 h-full">
                <div className={`${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">{step.description}</p>
                
                <div className="absolute top-6 right-6 opacity-20 font-bold text-4xl">
                  {step.number}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
