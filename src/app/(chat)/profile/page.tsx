"use client"

import { 
  Camera, 
  MapPin, 
  Link as LinkIcon, 
  Calendar, 
  Mail, 
  MessageSquare,
  ShieldAlert,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-black overflow-y-auto">
      {/* Cover Area */}
      <div className="h-48 w-full bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 shrink-0" />
      
      {/* Profile Header */}
      <div className="px-8 pb-8">
        <div className="relative -mt-16 mb-6 flex items-end justify-between">
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-white dark:border-black shadow-xl rounded-[2.5rem]">
              <AvatarFallback className="text-4xl font-bold">AR</AvatarFallback>
            </Avatar>
            <Button size="icon" className="absolute bottom-1 right-1 rounded-full h-10 w-10 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100">
              <Camera className="h-5 w-5 text-zinc-900 dark:text-zinc-50" />
            </Button>
          </div>
          <div className="flex gap-3 mb-2">
            <Button variant="outline" className="rounded-full px-6 font-bold" asChild>
              <Link href="/profile/edit">Edit Profile</Link>
            </Button>
            <Button className="rounded-full px-6 bg-zinc-900 text-white dark:bg-white dark:text-black font-bold">
              Share Profile
            </Button>
          </div>
        </div>

        <div className="space-y-1 mb-8">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-extrabold tracking-tight">Alex Rivai</h1>
            <Badge className="bg-blue-500 text-white border-none rounded-full px-2 py-0 h-5 text-[10px] font-bold">PRO</Badge>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">@alexrivai</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">About</h3>
              <p className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
                Senior Product Designer obsessed with crafting minimalist experiences. Currently building the future of realtime communication. 🍎
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
                  <MapPin className="h-4 w-4" /> Jakarta, Indonesia
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
                  <LinkIcon className="h-4 w-4" /> alexrivai.com
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
                  <Calendar className="h-4 w-4" /> Joined Jan 2026
                </div>
              </div>
            </div>

            {/* Media Shared Grid Placeholder */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Media</h3>
                <Button variant="ghost" size="sm" className="text-blue-500 font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20">View All</Button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-3xl animate-pulse" />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="rounded-3xl border-zinc-200 dark:border-zinc-800 apple-shadow">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Quick Actions</h3>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-between rounded-xl h-12 p-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4" /> Change Email
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-300" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between rounded-xl h-12 p-3">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-4 w-4" /> Notification Settings
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-300" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between rounded-xl h-12 p-3 text-red-500 hover:text-red-600">
                    <div className="flex items-center gap-3">
                      <ShieldAlert className="h-4 w-4" /> Account Privacy
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
