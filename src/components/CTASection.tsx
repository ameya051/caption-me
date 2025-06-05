import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="relative px-6 py-12 md:py-16 md:px-12 text-center md:text-left">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to add professional captions to your videos?
                </h2>
                <p className="text-purple-100 text-lg md:text-xl max-w-lg">
                  Join thousands of content creators who use CaptionMe to make
                  their videos more accessible and engaging.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={"/waitlist"}>
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-purple-50 btn-hover"
                    >
                      Join Waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={"/waitlist"}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="dark:text-white border-white hover:bg-white/10 btn-hover"
                    >
                      Schedule a Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <svg
                    className="w-full h-auto max-w-md mx-auto text-white opacity-20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M8 10h8" />
                    <path d="M8 14h8" />
                    <path d="M8 18h5" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-semibold text-white text-3xl">
                      Caption<span className="font-bold">Me</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
              <div className="w-64 h-64 bg-white/10 rounded-full filter blur-3xl opacity-50"></div>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
              <div className="w-64 h-64 bg-white/10 rounded-full filter blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
