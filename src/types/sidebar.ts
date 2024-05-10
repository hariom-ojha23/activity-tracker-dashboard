import { ButtonProps } from "@/components/ui/button"
import { type LucideIcon } from "lucide-react";

export interface SidebarItem {
    title: string;
    href: string;
    icon: LucideIcon;
    color?: string;
    isChidren?: boolean;
    children?: SidebarItem[];
}

export interface SidebarProps {
    sidebarItems: SidebarItem[]
}

export interface SidebarButtonProps extends ButtonProps {
    className?: string
    icon: LucideIcon
}

export interface SidebarMenuProps {
    item: SidebarItem
}