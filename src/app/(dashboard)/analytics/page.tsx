"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
} from "lucide-react";

export default function AnalyticsPage() {
  const metrics = [
    {
      title: "Page Views",
      value: "45,231",
      change: "+12.5%",
      isPositive: true,
      icon: Eye,
    },
    {
      title: "Unique Visitors",
      value: "8,459",
      change: "+8.2%",
      isPositive: true,
      icon: Users,
    },
    {
      title: "Bounce Rate",
      value: "42.3%",
      change: "-3.8%",
      isPositive: true,
      icon: TrendingDown,
    },
    {
      title: "Avg. Session",
      value: "3m 24s",
      change: "+15.3%",
      isPositive: true,
      icon: TrendingUp,
    },
  ];

  const trafficSources = [
    { name: "Direct", value: 45, color: "bg-blue-500" },
    { name: "Organic Search", value: 30, color: "bg-green-500" },
    { name: "Social Media", value: 15, color: "bg-purple-500" },
    { name: "Referral", value: 10, color: "bg-orange-500" },
  ];

  const topPages = [
    { page: "/dashboard", views: 12453, time: "4m 23s" },
    { page: "/products", views: 8932, time: "3m 15s" },
    { page: "/about", views: 6721, time: "2m 45s" },
    { page: "/contact", views: 4562, time: "1m 52s" },
    { page: "/blog", views: 3421, time: "5m 12s" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Detailed analytics and insights for your business
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p
                className={`text-xs ${metric.isPositive ? "text-green-600" : "text-red-600"}`}
              >
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{source.name}</span>
                  <span className="text-muted-foreground">{source.value}%</span>
                </div>
                <Progress value={source.value} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-3 last:border-0"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium">{page.page}</p>
                    <p className="text-xs text-muted-foreground">
                      Avg. time: {page.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">
                      {page.views.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">views</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics Tabs */}
      <Card>
        <Tabs defaultValue="overview">
          <CardHeader>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="conversion">Conversion</TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { label: "Total Sessions", value: "52,341" },
                  { label: "New Users", value: "12,453" },
                  { label: "Returning Users", value: "39,888" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-lg border p-4 text-center"
                  >
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="engagement" className="space-y-4">
              <div className="space-y-4">
                {[
                  { metric: "Avg. Session Duration", value: "3m 24s" },
                  { metric: "Pages per Session", value: "4.2" },
                  { metric: "Bounce Rate", value: "42.3%" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <span className="font-medium">{item.metric}</span>
                    <span className="text-2xl font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="conversion" className="space-y-4">
              <div className="space-y-4">
                {[
                  {
                    goal: "Newsletter Signups",
                    rate: "12.4%",
                    completed: 523,
                  },
                  { goal: "Product Purchases", rate: "3.2%", completed: 145 },
                  { goal: "Contact Form", rate: "8.7%", completed: 312 },
                ].map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{goal.goal}</span>
                      <span className="text-sm text-muted-foreground">
                        {goal.completed} conversions
                      </span>
                    </div>
                    <Progress value={parseFloat(goal.rate)} />
                    <p className="text-xs text-muted-foreground">
                      Conversion rate: {goal.rate}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}

