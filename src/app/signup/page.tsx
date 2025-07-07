'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import GoogleIcon from "@/components/icons/GoogleIcon";
import GitHubIcon from "@/components/icons/GithubIcon";
import { PasswordInput } from "@/components/ui/password-input";
import { useSignUp, signUpSchema, type SignUpFormData } from "./_hooks/useSignUp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignUp = () => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const signUpMutation = useSignUp();

  const onSubmit = (data: SignUpFormData) => {
    signUpMutation.mutate(data);
  };

  const handleGoogleSignUp = () => {
    window.location.href= `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/google`;
  };

  const handleGitHubSignUp = () => {
    window.location.href= `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/github`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <section className="container px-4 max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Create <span className="gradient-text">Account</span>
            </h1>
            <p className="text-muted-foreground">
              Join CaptionMe and start creating amazing captions
            </p>
          </div>

          <div className="bg-card rounded-xl border shadow-sm p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full h-12"
                  onClick={handleGoogleSignUp}
                  type="button"
                >
                  <GoogleIcon className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12"
                  onClick={handleGitHubSignUp}
                  type="button"
                >
                  <GitHubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>

              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or create with email</span>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Create a password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Confirm your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormDescription>
                          I accept the{' '}
                          <Link href="#" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="#" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 btn-hover"
                  disabled={signUpMutation.isPending}
                >
                  {signUpMutation.isPending ? "Creating account..." : (
                    <>
                      Create Account <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/signin" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
