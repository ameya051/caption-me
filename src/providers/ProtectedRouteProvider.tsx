"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

const publicRoutes = [
  "/signin",
  "/signup",
  "/waitlist",
  "/",
  "/forgot-password",
];

interface ProtectedRouteProviderProps {
  children: React.ReactNode;
}

const ProtectedRouteProvider = ({ children }: ProtectedRouteProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const { data: user, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      try {
        const { data } = await api.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
          { withCredentials: true }
        );
        return data.user;
      } catch (error) {
        return null;
      }
    },
    retry: false,
  });

  useEffect(() => {
    if (isLoading) return;

    if (!user && !publicRoutes.includes(pathname)) {
      router.push("/signin");
      return;
    }

    if (user && publicRoutes.includes(pathname)) {
      router.push("/dashboard");
      return;
    }
  }, [user, isLoading, pathname, router]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRouteProvider;
