"use client"

import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const STATS = [
  { label: "Total Users", value: "12,482", change: "+15.5%", trend: "up", icon: Users },
  { label: "Messages Today", value: "84,226", change: "+5.2%", trend: "up", icon: MessageSquare },
  { label: "Active Rooms", value: "326", change: "-2.1%", trend: "down", icon: Activity },
  { label: "Net Growth", value: "+2,412", change: "+18.7%", trend: "up", icon: TrendingUp },
];

const RECENT_USERS = [
  { name: "Sarah Wilson", email: "sarah@example.com", time: "2 menit lalu" },
  { name: "Mike Ross", email: "mike.ross@gmail.com", time: "15 menit lalu" },
  { name: "Elena Gilbert", email: "elena@vamp.com", time: "1 jam lalu" },
  { name: "Harvey Specter", email: "harvey@suits.com", time: "3 jam lalu" },
  { name: "Donna Paulsen", email: "donna@suits.com", time: "5 jam lalu" },
];

const RECENT_MESSAGES = [
  { sender: "Alex Rivai", room: "Designers", content: "Check the new Geist font guys!", time: "2m" },
  { sender: "John Doe", room: "DM: Sarah", content: "Hey, are you free today?", time: "1h" },
  { sender: "Elena S.", room: "Marketing", content: "Meeting at 3pm, don't forget!", time: "3h" },
  { sender: "Harvey S.", room: "General", content: "Welcome to Chatin everyone 🎉", time: "5h" },
];

export default function AdminDashboard() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Action bar */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Selamat datang kembali, Admin</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 text-xs">
            <Calendar className="mr-2 h-3.5 w-3.5" /> 7 hari terakhir
          </Button>
          <Button size="sm" className="h-8 text-xs bg-indigo-600 hover:bg-indigo-700 text-white">
            <Download className="mr-2 h-3.5 w-3.5" /> Export
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
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
                {stat.change} dari bulan lalu
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Chart Placeholder */}
        <Card className="col-span-4 border bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-semibold text-slate-700">Aktivitas Pesan</CardTitle>
            <CardDescription className="text-xs">Volume pesan harian selama 30 hari terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground bg-slate-50 rounded-md border border-dashed border-slate-200">
              <div className="text-center space-y-2">
                <Activity className="h-8 w-8 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-400">Grafik Aktivitas Pesan</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Users */}
        <Card className="col-span-3 border bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-semibold text-slate-700">Pengguna Baru</CardTitle>
            <CardDescription className="text-xs">5 pendaftaran terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {RECENT_USERS.map((user) => (
                <div key={user.email} className="flex items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-indigo-100 text-indigo-700 font-semibold text-xs">{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3 space-y-0.5 flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-700 leading-none">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground ml-2 shrink-0">{user.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Messages */}
      <Card className="border bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-semibold text-slate-700">Pesan Terbaru</CardTitle>
          <CardDescription className="text-xs">Monitoring pesan terbaru di semua room</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {RECENT_MESSAGES.map((msg, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-slate-50 last:border-0">
                <Avatar className="h-8 w-8 mt-0.5">
                  <AvatarFallback className="bg-slate-100 text-slate-600 font-semibold text-xs">{msg.sender[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-700">{msg.sender}</span>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-500 text-[10px] font-medium rounded px-1.5 py-0 border-none h-4">
                      {msg.room}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">{msg.content}</p>
                </div>
                <span className="text-[10px] text-muted-foreground shrink-0 mt-1">{msg.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
