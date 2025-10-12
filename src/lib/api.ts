import { User, Order, DashboardStats, ChartData } from "@/types";
import mockUsers from "@/data/mock-users.json";
import mockOrders from "@/data/mock-orders.json";
import mockStats from "@/data/mock-stats.json";
import mockChart from "@/data/mock-chart.json";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  // Users
  getUsers: async (): Promise<User[]> => {
    await delay(500);
    return mockUsers as User[];
  },

  // Orders
  getOrders: async (): Promise<Order[]> => {
    await delay(500);
    return mockOrders as Order[];
  },

  // Dashboard Stats
  getDashboardStats: async (): Promise<DashboardStats> => {
    await delay(500);
    return mockStats as DashboardStats;
  },

  // Chart Data
  getChartData: async (): Promise<ChartData[]> => {
    await delay(500);
    return mockChart as ChartData[];
  },
};
