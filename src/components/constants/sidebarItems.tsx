import { SidebarItem } from "@/types/sidebar"
import {  
  BarChartBig, 
  Bell, 
  CalendarClock, 
  LayoutDashboard, 
  Settings, 
  Trophy, 
  Users 
} from "lucide-react";

export const SidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Employees",
    icon: Users,
    href: "/employees",
  },
  {
    title: "Leaderboard",
    icon: Trophy,
    href: "/leaderboard",
  },
  {
    title: "Timesheet",
    icon: CalendarClock,
    href: "/timesheet",
  },
  {
    title: "Report",
    icon: BarChartBig,
    href: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
  }
];