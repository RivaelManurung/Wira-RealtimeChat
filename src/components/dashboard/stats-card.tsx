"use client"

import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  change: string;
  trend: "up" | "down";
}

export function StatsCard({ label, value, icon: Icon, change, trend }: StatsCardProps) {
  return (
    <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm rounded-3xl overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-bold uppercase tracking-wider text-zinc-500">{label}</CardTitle>
        <Icon className="h-4 w-4 text-zinc-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-1 mt-1">
          <span className={`text-xs font-bold flex items-center ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
            {trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {change}
          </span>
          <span className="text-[10px] text-zinc-400 font-medium">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
