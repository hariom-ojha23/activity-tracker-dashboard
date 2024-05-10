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
    isChidren: true,
    children: [
      {
        title: "All User",
        icon: Users,
        href: "/dashboard/all-users",
      },
      {
        title: "Active Users",
        icon: Users,
        href: "/dashboard/active-users",
      },
      {
        title: "Inactive Users",
        icon: Users,
        href: "/dashboard/inactive-users",
      },
    ],
  },
  {
    title: "Leaderboard",
    icon: Trophy,
    href: "/leaderboard",
    isChidren: true,
    children: [
      {
        title: "Most Active",
        icon: Trophy,
        href: "/leaderboard/most-productive",
      },
      {
        title: "Most Productive",
        icon: Trophy,
        href: "/leaderboard/most-active",
      },
    ],
  },
  {
    title: "Timesheet",
    icon: CalendarClock,
    href: "/timesheet",
    isChidren: true,
    children: [
      {
        title: "Active Hours",
        icon: CalendarClock,
        href: "/timesheet/active-hours",
      },
      {
        title: "Productive Hours",
        icon: CalendarClock,
        href: "/timesheet/productive-hours",
      },
    ],
  },
  {
    title: "Report",
    icon: BarChartBig,
    href: "/report",
    isChidren: true,
    children: [
      {
        title: "Scheduled Reports",
        icon: BarChartBig,
        href: "/report/scheduled-reports",
      },
      {
        title: "Past Reports",
        icon: BarChartBig,
        href: "/report/past-reports",
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/setting",
    isChidren: true,
    children: [
      {
        title: "Company",
        icon: Settings,
        href: "/setting/company",
      },
      {
        title: "Users",
        icon: Settings,
        href: "/setting/users",
      },
      {
        title: "Productivity",
        icon: Settings,
        href: "/setting/productivity",
      },
      {
        title: "Screenshots",
        icon: Settings,
        href: "/setting/screenshots",
      },
      {
        title: "Integration",
        icon: Settings,
        href: "/setting/integration",
      },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
  }
];