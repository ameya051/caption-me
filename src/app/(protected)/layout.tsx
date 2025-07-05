"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

interface ProtectedRouteProviderProps {
  children: React.ReactNode;
}

const ProtectedRouteProvider = ({ children }: ProtectedRouteProviderProps) => {
  const router = useRouter();
  const { user, isLoading, hasAttemptedFetch, fetchUser } = useAuthStore();

  useEffect(() => {
    if (!hasAttemptedFetch) {
      fetchUser();
    }
  }, [fetchUser, hasAttemptedFetch]);

  useEffect(() => {
    if (isLoading || !hasAttemptedFetch) return;

    if (!user) {
      router.push("/signin");
      return;
    }
  }, [isLoading, hasAttemptedFetch, router, user]);

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
