"use client"

import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Activity,
  ShieldAlert
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components/dashboard/stats-card";

const STATS = [
  { label: "Total Users", value: "12,543", icon: Users, change: "+12%", trend: "up" },
  { label: "Daily Active", value: "2,431", icon: Activity, change: "+5%", trend: "up" },
  { label: "Messages Sent", value: "84,392", icon: MessageSquare, change: "-2%", trend: "down" },
  { label: "New Signups", value: "432", icon: TrendingUp, change: "+18%", trend: "up" },
] as const;

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Stats Grid using reusable component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-3xl overflow-hidden">
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>Daily message volume and active users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <p className="text-sm text-zinc-400 font-medium italic">Chart visualization will be here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm rounded-3xl overflow-hidden">
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Latest moderation requests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                  <ShieldAlert className="h-4 w-4 text-red-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate">Report #{4320 + i}</p>
                  <p className="text-[10px] text-zinc-500 mb-1">Inappropriate content in "Designers" group</p>
                  <Badge variant="outline" className="text-[9px] h-4 rounded-full">Pending Review</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
