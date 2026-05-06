"use client"

import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  change: string;
  trend: "up" | "down";
}

export function StatsCard({ label, value, icon: Icon, change, trend }: StatsCardProps) {
  return (
    <Card className="border-zinc-200/50 dark:border-zinc-800 shadow-sm rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{label}</p>
          <div className="h-8 w-8 rounded-xl bg-zinc-50 flex items-center justify-center">
            <Icon className="h-4 w-4 text-zinc-400" />
          </div>
        </div>
        <div className="text-3xl font-black text-[#1C3422] tracking-tighter mb-2">{value}</div>
        <div className="flex items-center gap-1.5">
          <span className={`text-[11px] font-black flex items-center gap-0.5 px-2 py-0.5 rounded-full ${
            trend === "up" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
          }`}>
            {trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {change}
          </span>
          <span className="text-[10px] text-zinc-400 font-bold">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
