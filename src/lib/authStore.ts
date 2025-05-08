// src/lib/authStore.ts
import {create} from 'zustand'
import { JwtPayload } from './loadUserAttributesAws'



interface AuthState {
  user?: JwtPayload | null
  setUser: (u: JwtPayload | null) => void
  clearUser: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
  clearUser: () => set({ user: null }),
}))
