"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

// Define form schema with validation
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormData = z.infer<typeof formSchema>;

const Waitlist = () => {
  // Initialize the form with react-hook-form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Use React Query mutation
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/waitlist`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: data.email }),
          }
        );

        if (!response.ok) {
          
          const errorData = await response.json();
          toast.error(errorData.message);
          return;
        }

        const responseData = await response.json();

        // Show success toast
        toast.success(responseData.message);

        // Reset form on success
        form.reset();
      } catch (error) {
        // Only show toast if it wasn't already shown above
        if (
          error instanceof Error &&
          !error.message.includes("Failed to join waitlist")
        ) {
          toast.error("Something went wrong", {
            description: "Please check your connection and try again.",
          });
        }
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <section className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Join the <span className="gradient-text">Waitlist</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be the first to know when we launch CaptionMe. Join our waitlist
              to get early access and special offers.
            </p>
          </div>

          <div
            className="max-w-md mx-auto bg-card rounded-xl border shadow-sm p-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormDescription>
                        We&apos;ll never share your email with anyone else.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full h-12 btn-hover"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    "Submitting..."
                  ) : (
                    <>
                      Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <div
            className="mt-20 grid md:grid-cols-3 gap-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-card p-6 rounded-lg border card-hover">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Early Access</h3>
              <p className="text-muted-foreground">
                Get access before everyone else and be the first to try our AI
                caption generator.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border card-hover">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Special Pricing</h3>
              <p className="text-muted-foreground">
                Waitlist members will receive special pricing when we launch
                CaptionMe.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border card-hover">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Feature Requests</h3>
              <p className="text-muted-foreground">
                Help shape the future of CaptionMe by providing early feedback
                and feature requests.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Waitlist;
