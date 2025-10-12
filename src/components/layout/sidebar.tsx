"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  ChevronLeft,
  UserCircle,
  TrendingUp,
  Bell,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}


export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();
  const { t, dir } = useLanguage();

  const navigation = [
    {
      name: t.nav.dashboard,
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: t.nav.analytics,
      href: "/analytics",
      icon: TrendingUp,
    },
    {
      name: t.nav.users,
      href: "/users",
      icon: Users,
    },
    {
      name: t.nav.orders,
      href: "/orders",
      icon: ShoppingCart,
    },
    {
      name: t.nav.reports,
      href: "/reports",
      icon: BarChart3,
    },
    {
      name: t.nav.notifications,
      href: "/notifications",
      icon: Bell,
    },
    {
      name: dir === "rtl" ? "کامپوننت‌ها" : "Components",
      href: "/components-demo",
      icon: Boxes,
    },
    {
      name: t.nav.profile,
      href: "/profile",
      icon: UserCircle,
    },
    {
      name: t.nav.settings,
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div
      className={cn(
        "relative flex h-full flex-col border-r bg-card transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-4">
        {!isCollapsed && (
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <LayoutDashboard className="text-primary-foreground h-5 w-5" />
            </div>
            <span className="text-lg font-bold">
              {dir === "rtl" ? "پنل مدیریت" : "Admin"}
            </span>
          </Link>
        )}
        {isCollapsed && (
          <Link href="/dashboard" className="mx-auto">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <LayoutDashboard className="text-primary-foreground h-5 w-5" />
            </div>
          </Link>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
              title={isCollapsed ? item.name : undefined}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse button */}
      <div className="border-t p-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-full"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronLeft
            className={cn(
              "h-5 w-5 transition-transform",
              isCollapsed && "rotate-180",
              dir === "rtl" && !isCollapsed && "rotate-180",
              dir === "rtl" && isCollapsed && "rotate-0"
            )}
          />
        </Button>
      </div>
    </div>
  );
}
