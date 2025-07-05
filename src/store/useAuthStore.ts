import { create } from 'zustand'
import api from '@/lib/axios'

interface User {
  data: any
}

interface AuthState {
  user: any
  isLoading: boolean
  hasAttemptedFetch: boolean
  fetchUser: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: undefined,
  isLoading: true, // Start with loading true
  hasAttemptedFetch: false,
  fetchUser: async () => {
    set(() => ({ isLoading: true }))
    try {
      const { data } = await api.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
        { withCredentials: true }
      )
      console.log("Fetched user data:", data) // Log the fetched user data;

      set(() => ({ user: data.data, isLoading: false, hasAttemptedFetch: true }))
    } catch (error) {
      set(()=>({ user: undefined, isLoading: false, hasAttemptedFetch: true }))
    }
  }
}))