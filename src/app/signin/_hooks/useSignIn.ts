import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import axios from 'axios';

export const signInSchema = z.object({

  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export type SignInFormData = z.infer<typeof signInSchema>;

export function useSignIn() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: SignInFormData) => {
      console.log("Signing in with data:", data);

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signin`, data,{withCredentials: true});
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Sign in successful!", {
        description: `Welcome back!`,
      });
      router.push('/dashboard');
    },
    onError: (error: Error) => {
      toast.error("Sign in failed", {
        description: error.message || "Please check your credentials and try again.",
      });
    }
  });
}
