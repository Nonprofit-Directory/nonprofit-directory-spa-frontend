import { Home, User, BarChart2, LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  link: string;
  Icon: LucideIcon;
}

export const menuItems: MenuItem[] = [
  { title: "Home", link: "/home", Icon: Home },
  { title: "Profile", link: "/profile", Icon: User },
  { title: "Explore Data", link: "/explore", Icon: BarChart2 },
];
