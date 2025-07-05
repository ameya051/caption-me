'use client';
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import api from "@/lib/axios";

export function useLogout() {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const response = await api.post("/api/auth/logout");
      return response.data;
    },
    onSuccess: () => {
      toast.success("Logged out successfully!");
      router.push("/signin");
    },
    onError: (error: any) => {
      toast.error("Logout failed", {
        description:
          error.response?.data?.message || "An error occurred during logout",
      });
      router.push("/signin");
    },
  });
}
