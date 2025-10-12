import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  TrendingUp,
} from "lucide-react";

interface Activity {
  id: string;
  title: string;
  description: string;
  time: string;
  status: "success" | "pending" | "warning" | "error";
}

const activities: Activity[] = [
  {
    id: "1",
    title: "Order Completed",
    description: "Order #12345 has been successfully delivered",
    time: "2 hours ago",
    status: "success",
  },
  {
    id: "2",
    title: "Payment Pending",
    description: "Waiting for payment confirmation from customer",
    time: "5 hours ago",
    status: "pending",
  },
  {
    id: "3",
    title: "Low Stock Alert",
    description: "Product inventory is running low",
    time: "1 day ago",
    status: "warning",
  },
  {
    id: "4",
    title: "Failed Transaction",
    description: "Payment gateway error occurred",
    time: "2 days ago",
    status: "error",
  },
  {
    id: "5",
    title: "Revenue Milestone",
    description: "Reached $100k in monthly revenue",
    time: "3 days ago",
    status: "success",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "success":
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    case "pending":
      return <Clock className="h-5 w-5 text-yellow-600" />;
    case "warning":
      return <AlertCircle className="h-5 w-5 text-orange-600" />;
    case "error":
      return <XCircle className="h-5 w-5 text-red-600" />;
    default:
      return <TrendingUp className="h-5 w-5 text-blue-600" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "success":
      return <Badge className="bg-green-100 text-green-700">Success</Badge>;
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>;
    case "warning":
      return <Badge className="bg-orange-100 text-orange-700">Warning</Badge>;
    case "error":
      return <Badge className="bg-red-100 text-red-700">Error</Badge>;
    default:
      return <Badge>Info</Badge>;
  }
};

export function ActivityTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="relative flex gap-4 pb-4 last:pb-0"
            >
              {/* Timeline line */}
              {index < activities.length - 1 && (
                <div className="absolute left-[18px] top-8 h-full w-[2px] bg-border" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-card">
                {getStatusIcon(activity.status)}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">{activity.title}</h4>
                  {getStatusBadge(activity.status)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

