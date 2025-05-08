// src/lib/useLoadUser.ts
import { useEffect } from 'react'
import { useAuthStore } from '@/lib/authStore'
import loadUserAttributes from '@/lib/loadUserAttributesAws'

export function useLoadUser() {
  const setUser = useAuthStore((s) => s.setUser)

  useEffect(() => {
    loadUserAttributes()
      .then((payload) => setUser(payload))
      .catch(() => setUser(null))
  }, [setUser])
}
