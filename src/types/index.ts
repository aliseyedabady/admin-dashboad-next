export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  avatar?: string;
  createdAt: string;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: "pending" | "completed" | "cancelled";
  date: string;
}

export interface DashboardStats {
  sales: {
    value: number;
    change: number;
  };
  users: {
    value: number;
    change: number;
  };
  orders: {
    value: number;
    change: number;
  };
  revenue: {
    value: number;
    change: number;
  };
}

export interface ChartData {
  name: string;
  sales: number;
  revenue: number;
}
