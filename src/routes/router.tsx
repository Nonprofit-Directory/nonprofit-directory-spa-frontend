// src/routes/router.tsx
import { createBrowserRouter, Navigate } from "react-router-dom"
// import LoginPage from "@/pages/LoginPage"
import HomePage from "@/pages/HomePage"
import ProfilePage from "@/pages/ProfilePage"
import ExplorePage from "@/pages/ExplorePage"
import AccountPage from "@/pages/AccountPage"
import MainLayout from "@/layout/MainLayout"
import PageNotFound from "@/components/404/PageNotFound"
// import { roleLoader } from "./roleLoader"



export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage />,
  // },
  // {
  //   path: "/signup",
  //   element: <SignupPage />,
  // },
  // {
  //   path: "/confirm-signup",
  //   element: <ConfirmSignup />,
  // },
  // {
  //   path: "/callback",
  //   element: <OAuthCallback />
  // },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // 1) Si vas a “/”, redirige automáticamente a “/home”
      { index: true, element: <Navigate to="home" replace /> },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "explore",
        element: <ExplorePage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound/>,
  },
])
