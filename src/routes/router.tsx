// src/routes/router.tsx
import { createBrowserRouter } from "react-router-dom"
import LoginPage from "@/pages/LoginPage"
import HomePage from "@/pages/HomePage"
import ProfilePage from "@/pages/ProfilePage"
import ExplorePage from "@/pages/ExplorePage"
import AccountPage from "@/pages/AccountPage"
import MainLayout from "@/layout/MainLayout"
import PageNotFound from "@/components/404/PageNotFound"

import { protectedLoader } from "./protectedLoader"
import OAuthCallback from "@/pages/OAuthCallback"
import SignupPage from "@/pages/SignupPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/callback",
    element: <OAuthCallback />
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
        loader: protectedLoader,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        loader: protectedLoader,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
        loader: protectedLoader,
      },
      {
        path: "/account",
        element: <AccountPage />,
        loader: protectedLoader,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound/>,
  },
])
