"use client"

import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Activity, 
  Calendar,
  ArrowUpRight,
  Filter,
  Download
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-1">Growth Analytics</h1>
          <p className="text-zinc-500 font-medium italic">Track user acquisition, retention, and engagement</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-full gap-2 border-zinc-200 dark:border-zinc-800">
            <Download className="h-4 w-4" /> Export Report
          </Button>
          <Button className="rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black font-bold">
            Generate Insights
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-zinc-100 dark:bg-zinc-900 p-1 rounded-2xl h-12 inline-flex">
          <TabsTrigger value="overview" className="rounded-xl px-6 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800">Overview</TabsTrigger>
          <TabsTrigger value="users" className="rounded-xl px-6 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800">Users</TabsTrigger>
          <TabsTrigger value="engagement" className="rounded-xl px-6 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800">Engagement</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "MAU", value: "84.2k", change: "+12.4%", icon: Users },
          { label: "Daily Messages", value: "1.2M", change: "+5.2%", icon: MessageSquare },
          { label: "Stickiness (DAU/MAU)", value: "32%", change: "+2.1%", icon: Activity },
          { label: "Net Growth", value: "+2.4k", change: "+18.7%", icon: TrendingUp },
        ].map((stat) => (
          <Card key={stat.label} className="rounded-3xl border-zinc-200 dark:border-zinc-800 p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{stat.label}</span>
              <stat.icon className="h-4 w-4 text-zinc-300" />
            </div>
            <div className="text-3xl font-black">{stat.value}</div>
            <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
              <ArrowUpRight className="h-3 w-3" /> {stat.change}
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
          <CardHeader className="p-8">
            <CardTitle>User Acquisition</CardTitle>
            <CardDescription>New signups vs activated accounts over time</CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="h-[300px] w-full bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <div className="text-center space-y-2">
                 <TrendingUp className="h-10 w-10 text-zinc-300 mx-auto" />
                 <p className="text-sm text-zinc-400 font-medium italic">Acquisition Chart Visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
          <CardHeader className="p-8">
            <CardTitle>Active Hours</CardTitle>
            <CardDescription>Heatmap of message volume throughout the day</CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="h-[300px] w-full bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <div className="text-center space-y-2">
                 <Activity className="h-10 w-10 text-zinc-300 mx-auto" />
                 <p className="text-sm text-zinc-400 font-medium italic">Engagement Heatmap Visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
