"use client"

import { 
  ChevronLeft, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle,
  ExternalLink,
  MessageSquare,
  Clock,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default function AdminReportDetailPage({ params }: { params: { reportId: string } }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 -ml-2" asChild>
            <Link href="/admin/reports">
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-xl font-black tracking-tight">Report: {params.reportId}</h1>
        </div>
        <Badge className="bg-amber-500 text-white border-none rounded-full px-4 h-7 font-black uppercase text-[10px]">Pending Review</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Report Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
            <CardHeader className="p-8 pb-0">
              <div className="flex items-center gap-3 text-red-500 mb-2">
                <ShieldAlert className="h-5 w-5" />
                <h2 className="text-lg font-black uppercase tracking-widest">Inappropriate Content</h2>
              </div>
              <CardDescription className="text-zinc-500 font-medium italic">
                Reported by Elena Smith on May 12, 2026 at 14:32
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="p-6 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 relative">
                <div className="absolute -top-3 -left-3 bg-zinc-900 text-white dark:bg-white dark:text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                  Reported Content
                </div>
                <div className="space-y-4 pt-2">
                  <p className="text-lg font-medium leading-relaxed italic">
                    "This is the reported message content that might contain spam or inappropriate words..."
                  </p>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    <MessageSquare className="h-4 w-4" /> Room: Designers Group
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Moderator Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <Button className="rounded-full h-12 px-8 bg-green-600 hover:bg-green-700 text-white font-bold gap-2">
                    <CheckCircle2 className="h-4 w-4" /> Resolve & Close
                  </Button>
                  <Button variant="outline" className="rounded-full h-12 px-8 text-red-500 border-red-100 hover:bg-red-50 font-bold gap-2">
                    <XCircle className="h-4 w-4" /> Reject Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar: Entity Info */}
        <div className="space-y-6">
          <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm p-6 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Accused User</h3>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-lg">John Doe</p>
                <p className="text-xs text-zinc-500 font-medium italic mb-2">@johndoe</p>
                <Button variant="link" className="p-0 h-auto text-blue-500 font-bold text-xs uppercase flex items-center gap-1" asChild>
                  <Link href="/admin/users/123">View Admin Profile <ExternalLink className="h-3 w-3" /></Link>
                </Button>
              </div>
            </div>
            <div className="h-px bg-zinc-100 dark:bg-zinc-800" />
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-zinc-500">Trust Score</span>
                <span className="text-amber-500 font-bold">64/100</span>
              </div>
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-zinc-500">Prev. Reports</span>
                <span className="font-bold">4 Times</span>
              </div>
            </div>
          </Card>

          <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-2 text-zinc-400">
              <Clock className="h-4 w-4" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em]">Timeline</h3>
            </div>
            <div className="space-y-4 relative pl-4 border-l border-zinc-100 dark:border-zinc-800 ml-2">
              <div className="relative">
                <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <p className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100">Report Created</p>
                <p className="text-[10px] text-zinc-500">May 12, 14:32</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-blue-500" />
                <p className="text-[11px] font-bold text-blue-500">Auto-Flagged (Spam)</p>
                <p className="text-[10px] text-zinc-500">May 12, 14:35</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
