import { useEffect } from 'react'
import { useAuthStore } from '@/lib/authStore'
import loadUserAttributes from '@/lib/loadUserAttributesAws'

export function useLoadUser() {
  const setUser    = useAuthStore(s => s.setUser)
  const setLoading = useAuthStore(s => s.setLoading)

  useEffect(() => {
    setLoading(true)
    loadUserAttributes()
      .then((payload) => setUser(payload))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [setUser, setLoading])
}