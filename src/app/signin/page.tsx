'use client';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import GoogleIcon from "@/components/icons/GoogleIcon";
import GitHubIcon from "@/components/icons/GithubIcon";
import { PasswordInput } from "@/components/ui/password-input";
import { useSignIn, signInSchema, type SignInFormData } from "@/hooks/useSignIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignIn = () => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInMutation = useSignIn();

  const onSubmit = (data: SignInFormData) => {
    signInMutation.mutate(data);
  };

  const handleGoogleSignIn = () => {
    // Redirect to the backend's Google OAuth endpoint
    window.location.href = "http://localhost:8000/api/google";
  };

  const handleGitHubSignIn = () => {
    window.location.href = "http://localhost:8000/api/github";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <section className="container px-4 max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Welcome <span className="gradient-text">Back</span>
            </h1>
            <p className="text-muted-foreground">
              Sign in to your CaptionMe account
            </p>
          </div>

          <div className="bg-card rounded-xl border shadow-sm p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
                          placeholder="Enter your password" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full h-12 btn-hover" 
                  disabled={signInMutation.isPending}
                >
                  {signInMutation.isPending ? "Signing in..." : (
                    <>
                      Sign In <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="w-full h-12" 
                  onClick={handleGoogleSignIn}
                  type="button"
                >
                  <GoogleIcon className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full h-12" 
                  onClick={handleGitHubSignIn}
                  type="button"
                >
                  <GitHubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-primary hover:underline font-medium">
                  Sign up
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

export default SignIn;
