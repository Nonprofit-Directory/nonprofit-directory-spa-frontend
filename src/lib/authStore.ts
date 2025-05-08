// src/lib/authStore.ts
import {create} from 'zustand'
import { JwtPayload } from './loadUserAttributesAws'

interface AuthState {
  user: JwtPayload | null
  loading: boolean
  setUser: (u: JwtPayload | null) => void
  setLoading: (l: boolean) => void
  clearUser: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (u) => set({ user: u }),
  setLoading: (l) => set({ loading: l }),
  clearUser: () => set({ user: null }),
}))