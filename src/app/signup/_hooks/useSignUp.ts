import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import api from '@/lib/axios';

export const signUpSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, { 
      message: "Password must contain at least one uppercase letter, one lowercase letter, and one number" 
    }),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

export function useSignUp() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: SignUpFormData) => {
      const response = await api.post('/api/auth/signup', {
        email: data.email,
        password: data.password
      });
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Account created successfully!", {
        description: "Welcome to CaptionMe!",
      });
      router.push('/dashboard');
    },
    onError: (error: Error) => {
      toast.error("Sign up failed", {
        description: error.message || "Please try again later.",
      });
    }
  });
}
