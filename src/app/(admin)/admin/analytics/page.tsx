"use client"

import { 
  Users, 
  MessageSquare, 
  Activity, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const STATS = [
  { label: "MAU", value: "84.2k", change: "+12.4%", trend: "up", icon: Users },
  { label: "Pesan Harian", value: "1.2M", change: "+5.2%", trend: "up", icon: MessageSquare },
  { label: "Stickiness (DAU/MAU)", value: "32%", change: "+2.1%", trend: "up", icon: Activity },
  { label: "Net Growth", value: "+2.4k", change: "+18.7%", trend: "up", icon: TrendingUp },
];

const TOP_ROOMS = [
  { name: "General", members: 4821, messages: "12.4k", growth: "+8.2%" },
  { name: "Designers", members: 1203, messages: "8.1k", growth: "+12.1%" },
  { name: "Marketing", members: 892, messages: "5.6k", growth: "-2.3%" },
  { name: "Engineering", members: 756, messages: "4.2k", growth: "+15.4%" },
  { name: "Random", members: 3412, messages: "3.8k", growth: "+1.2%" },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Action bar */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Analisis pertumbuhan dan engagement platform</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 text-xs">
            <Calendar className="mr-2 h-3.5 w-3.5" /> 30 hari terakhir
          </Button>
          <Button size="sm" className="h-8 text-xs bg-indigo-600 hover:bg-indigo-700 text-white">
            <Download className="mr-2 h-3.5 w-3.5" /> Export Report
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.label} className="border bg-white shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <div className={`flex items-center gap-1 text-xs font-semibold mt-1 ${stat.trend === "up" ? "text-emerald-600" : "text-red-500"}`}>
                {stat.trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-semibold text-slate-700">Akuisisi Pengguna</CardTitle>
            <CardDescription className="text-xs">Pendaftaran baru vs akun aktif</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[280px] w-full flex items-center justify-center text-muted-foreground bg-slate-50 rounded-md border border-dashed border-slate-200">
              <div className="text-center space-y-2">
                <TrendingUp className="h-8 w-8 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-400">Grafik Akuisisi Pengguna</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-semibold text-slate-700">Jam Aktif</CardTitle>
            <CardDescription className="text-xs">Heatmap volume pesan sepanjang hari</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[280px] w-full flex items-center justify-center text-muted-foreground bg-slate-50 rounded-md border border-dashed border-slate-200">
              <div className="text-center space-y-2">
                <Activity className="h-8 w-8 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-400">Heatmap Engagement</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Rooms Table */}
      <Card className="border bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-semibold text-slate-700">Room Teratas</CardTitle>
          <CardDescription className="text-xs">5 room dengan aktivitas tertinggi</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="grid grid-cols-4 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider pb-2 border-b">
              <span>NAMA ROOM</span>
              <span>ANGGOTA</span>
              <span>PESAN</span>
              <span>PERTUMBUHAN</span>
            </div>
            {TOP_ROOMS.map((room) => (
              <div key={room.name} className="grid grid-cols-4 items-center py-2 text-sm">
                <span className="font-semibold text-slate-700">{room.name}</span>
                <span className="text-muted-foreground">{room.members.toLocaleString()}</span>
                <span className="text-muted-foreground">{room.messages}</span>
                <span className={`font-semibold text-xs ${room.growth.startsWith("+") ? "text-emerald-600" : "text-red-500"}`}>
                  {room.growth}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
