// src/lib/auth.ts

export const isAuthenticated = (): boolean => {
    // Simulación: checar si hay token en localStorage
    return !!localStorage.getItem("token")
  }
  