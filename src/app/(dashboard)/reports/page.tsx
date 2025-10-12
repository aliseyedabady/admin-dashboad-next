"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OverviewChart } from "@/components/dashboard/overview-chart";
import { BarChart3, TrendingUp, DollarSign, Users } from "lucide-react";

export default function ReportsPage() {
  const { data: chartData, isLoading: chartLoading } = useQuery({
    queryKey: ["chart-data"],
    queryFn: api.getChartData,
  });

  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: api.getDashboardStats,
  });

  if (chartLoading || statsLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          View detailed reports and analytics for your business.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${stats?.revenue.value.toLocaleString()}
            </div>
            <p className="text-muted-foreground text-xs">
              +{stats?.revenue.change}% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <TrendingUp className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats?.sales.value.toLocaleString()}
            </div>
            <p className="text-muted-foreground text-xs">
              +{stats?.sales.change}% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats?.users.value.toLocaleString()}
            </div>
            <p className="text-muted-foreground text-xs">
              +{stats?.users.change}% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <BarChart3 className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.3%</div>
            <p className="text-muted-foreground text-xs">
              Compared to previous period
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <OverviewChart data={chartData || []} />

      {/* Additional Report Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
            <CardDescription>
              Breakdown of sales across different product categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium">Electronics</p>
                  <div className="bg-muted mt-1 h-2 w-full rounded-full">
                    <div className="bg-primary h-2 w-[60%] rounded-full" />
                  </div>
                </div>
                <span className="ml-4 text-sm font-medium">60%</span>
              </div>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium">Clothing</p>
                  <div className="bg-muted mt-1 h-2 w-full rounded-full">
                    <div className="bg-primary h-2 w-[30%] rounded-full" />
                  </div>
                </div>
                <span className="ml-4 text-sm font-medium">30%</span>
              </div>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium">Accessories</p>
                  <div className="bg-muted mt-1 h-2 w-full rounded-full">
                    <div className="bg-primary h-2 w-[10%] rounded-full" />
                  </div>
                </div>
                <span className="ml-4 text-sm font-medium">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
            <CardDescription>
              Your best selling products this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Premium Subscription", sales: 234 },
                { name: "Enterprise Package", sales: 189 },
                { name: "Standard Plan", sales: 156 },
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {product.sales} sales
                    </p>
                  </div>
                  <div className="text-sm font-medium">#{index + 1}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
