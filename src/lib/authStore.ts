
import { create } from "zustand"

type User = {
  name: string
  email: string
}

type AuthStore = {
  user: User | null
  login: (userData: User) => void
  logout: () => void
  isAuthenticated: () => boolean
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  login: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData))
    set({ user: userData })
  },
  logout: () => {
    localStorage.removeItem("user")
    set({ user: null })
  },
  isAuthenticated: () => !!get().user,
}))
