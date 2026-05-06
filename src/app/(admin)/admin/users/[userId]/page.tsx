"use client"

import { 
  ChevronLeft, 
  Ban, 
  ShieldAlert, 
  History, 
  MessageSquare, 
  Users as UsersIcon,
  Trash2,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AdminUserDetailPage({ params }: { params: { userId: string } }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 -ml-2" asChild>
          <Link href="/admin/users">
            <ChevronLeft className="h-6 w-6" />
          </Link>
        </Button>
        <h1 className="text-xl font-black tracking-tight">User Detail: Alex Rivai</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile Card */}
        <div className="space-y-6">
          <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
            <div className="h-24 bg-zinc-100 dark:bg-zinc-800" />
            <CardContent className="p-8 -mt-12 text-center space-y-4">
              <Avatar className="h-24 w-24 rounded-[2rem] border-4 border-white dark:border-zinc-900 mx-auto shadow-xl">
                <AvatarFallback className="text-2xl font-black">AR</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-black">Alex Rivai</h2>
                <p className="text-sm text-zinc-500 font-medium italic">@alexr • Joined Jan 2026</p>
              </div>
              <Badge className="bg-green-500/10 text-green-600 border-none rounded-full px-4 h-6 font-black uppercase text-[10px]">Active</Badge>
              
              <div className="pt-4 space-y-2">
                <Button className="w-full rounded-2xl h-12 bg-red-500 hover:bg-red-600 text-white font-bold gap-2">
                  <Ban className="h-4 w-4" /> Ban User
                </Button>
                <Button variant="outline" className="w-full rounded-2xl h-12 font-bold gap-2 border-zinc-200 dark:border-zinc-800">
                  <Trash2 className="h-4 w-4" /> Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm p-6 space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Account Security</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500 font-medium">Email Verified</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500 font-medium">2FA Enabled</span>
                <Badge variant="outline" className="rounded-full">No</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Activity & Logs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="rounded-3xl p-6 flex items-center gap-4 border-zinc-200 dark:border-zinc-800">
               <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-500">
                  <MessageSquare className="h-6 w-6" />
               </div>
               <div>
                  <p className="text-2xl font-black">1.2k</p>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Messages Sent</p>
               </div>
            </Card>
            <Card className="rounded-3xl p-6 flex items-center gap-4 border-zinc-200 dark:border-zinc-800">
               <div className="h-12 w-12 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-500">
                  <UsersIcon className="h-6 w-6" />
               </div>
               <div>
                  <p className="text-2xl font-black">14</p>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Groups Joined</p>
               </div>
            </Card>
          </div>

          <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-800/50 p-6">
              <div className="flex items-center gap-2">
                <History className="h-5 w-5 text-zinc-400" />
                <CardTitle className="text-lg">Audit Logs</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                  <div>
                    <p className="text-sm font-bold">Profile Updated</p>
                    <p className="text-xs text-zinc-500 font-medium">Changed display name and bio</p>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase">2 hours ago</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm p-6 bg-red-50/10 dark:bg-red-900/5 border-dashed">
            <div className="flex items-start gap-4">
              <ShieldAlert className="h-6 w-6 text-red-500 shrink-0" />
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-red-600">User Moderation History</h3>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                  Alex has been reported 2 times for spam in the last 30 days. No formal action has been taken yet.
                </p>
                <Button variant="link" className="text-red-500 p-0 h-auto font-bold text-xs uppercase tracking-widest">View Report Details</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
