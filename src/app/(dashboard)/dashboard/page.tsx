"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { StatCard } from "@/components/dashboard/stat-card";
import { OverviewChart } from "@/components/dashboard/overview-chart";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { mockAuth } from "@/lib/auth";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const user = mockAuth.getUser();
    if (user) {
      setUserName(user.name);
    }
  }, []);

  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: api.getDashboardStats,
  });

  const { data: chartData, isLoading: chartLoading } = useQuery({
    queryKey: ["chart-data"],
    queryFn: api.getChartData,
  });

  const { data: orders, isLoading: ordersLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: api.getOrders,
  });

  if (statsLoading || chartLoading || ordersLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome message */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {userName}!
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your store today.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Sales"
          value={stats?.sales.value.toLocaleString() || 0}
          change={stats?.sales.change || 0}
          icon={DollarSign}
        />
        <StatCard
          title="Total Users"
          value={stats?.users.value.toLocaleString() || 0}
          change={stats?.users.change || 0}
          icon={Users}
        />
        <StatCard
          title="Total Orders"
          value={stats?.orders.value.toLocaleString() || 0}
          change={stats?.orders.change || 0}
          icon={ShoppingCart}
        />
        <StatCard
          title="Total Revenue"
          value={`$${stats?.revenue.value.toLocaleString() || 0}`}
          change={stats?.revenue.change || 0}
          icon={TrendingUp}
        />
      </div>

      {/* Chart */}
      <OverviewChart data={chartData || []} />

      {/* Recent orders table */}
      <RecentOrders orders={orders || []} />
    </div>
  );
}
