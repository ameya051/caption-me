import React from 'react';
import { Brain, FileText, FileVideo, Mic, Video } from "lucide-react";
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Powered by AI",
    description: "Advanced speech recognition models ensure highly accurate transcription and caption generation.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "Multiple Caption Styles",
    description: "Choose from various caption styles and formats that best suit your content and platform.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FileVideo className="h-10 w-10" />,
    title: "Export Options",
    description: "Export captions in multiple formats including SRT, VTT, and embedded directly in your video.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: <Video className="h-10 w-10" />,
    title: "Batch Processing",
    description: "Caption multiple videos simultaneously with our efficient batch processing system.",
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    icon: <Mic className="h-10 w-10" />,
    title: "Multi-language Support",
    description: "Generate captions for content in over 40 different languages and dialects.",
    color: "from-pink-500 to-rose-500"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to create professional captions for your videos
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-sm border card-hover animate-fade-in dark:border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn("w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br", feature.color)}>
                {React.cloneElement(feature.icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
