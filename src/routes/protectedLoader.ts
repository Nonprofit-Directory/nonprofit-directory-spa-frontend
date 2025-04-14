// src/routes/protectedLoader.ts
import { redirect } from "react-router-dom"
// import { useAuthStore } from "../lib/authStore"

export const protectedLoader = () => {
  const userInStorage = localStorage.getItem("user")
  if (!userInStorage) {
    return redirect("/")
  }
  return null
}
