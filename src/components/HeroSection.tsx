import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Video } from "lucide-react";
import Link from "next/link";
import DemoSection from "./DemoSection";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-medium lg:text-6xl antialiased tracking-tighter animate-fade-in">
              One Upload. Perfect{" "}
              <span className="gradient-text">Captions.</span> Done.
            </h1>
            <p
              className="max-w-[600px] text-muted-foreground text-lg md:text-xl animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Upload your video and our AI will automatically generate accurate
              captions. Save time and make your content accessible to everyone.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Link href={"/signin"}>
                <Button size="lg" className="btn-hover">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={"/waitlist"}>
                <Button size="lg" variant="outline" className="btn-hover">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
          <DemoSection/>
          {/* <div
            className="relative lg:mt-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-2xl p-1 shadow-xl">
              <div className="bg-background rounded-xl overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <div className="md:absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-md p-4 flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-primary animate-pulse">
                        <Video size={24} />
                        <span className="font-medium">
                          Processing your video...
                        </span>
                      </div>
                      <div className="h-2.5 bg-secondary rounded-full">
                        <div className="h-full w-2/3 bg-primary rounded-full animate-pulse"></div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <FileText size={18} className="text-primary" />
                          <p className="text-sm text-muted-foreground">
                            Generating captions...
                          </p>
                        </div>
                        <div className="bg-secondary text-secondary-foreground p-2 rounded text-sm animate-pulse">
                          Welcome to CaptionMe where AI helps you caption videos
                          in seconds.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText size={16} />
                      <span>Captions ready</span>
                    </div>
                    <Button size="sm" variant="secondary" className="text-xs">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -inset-1 blur-xl opacity-50 bg-gradient-to-br from-purple-600 to-indigo-600 animate-pulse"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
