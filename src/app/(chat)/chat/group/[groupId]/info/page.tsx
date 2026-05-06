"use client"

import { 
  Users, 
  Image as ImageIcon, 
  FileText, 
  Bell, 
  LogOut, 
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  UserMinus,
  Settings,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const MEMBERS = [
  { id: "1", name: "Alex Rivai", role: "Admin", online: true },
  { id: "2", name: "Sarah Wilson", role: "Member", online: true },
  { id: "3", name: "John Doe", role: "Member", online: false },
  { id: "4", name: "Elena Smith", role: "Member", online: true },
];

export default function GroupInfoPage({ params }: { params: { groupId: string } }) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-black overflow-hidden font-sans">
      {/* Header */}
      <header className="h-20 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between px-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 -ml-2" asChild>
            <Link href={`/chat/group/${params.groupId}`}>
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-xl font-black tracking-tight">Group Info</h1>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
          <Settings className="h-5 w-5" />
        </Button>
      </header>

      <ScrollArea className="flex-1">
        <div className="max-w-2xl mx-auto p-8 space-y-12">
          {/* Group Identity */}
          <section className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-32 w-32 rounded-[2.5rem] border-4 border-zinc-50 dark:border-zinc-900 shadow-xl">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-3xl font-black tracking-tight">Product Design Team</h2>
              <p className="text-zinc-500 font-medium italic">Creating the future of communication.</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="rounded-full px-4 py-1 h-8 bg-zinc-100 dark:bg-zinc-800 border-none font-bold">12 Members</Badge>
              <Badge variant="secondary" className="rounded-full px-4 py-1 h-8 bg-blue-500/10 text-blue-600 border-none font-bold">Public Group</Badge>
            </div>
          </section>

          {/* Quick Actions Card */}
          <Card className="rounded-[2.5rem] border-zinc-100 dark:border-zinc-800 apple-shadow overflow-hidden">
            <CardContent className="p-2 space-y-1">
              <Button variant="ghost" className="w-full justify-between rounded-2xl h-14 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-500">
                    <Bell className="h-5 w-5" />
                  </div>
                  <span className="font-bold">Mute Notifications</span>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-300" />
              </Button>
              <Button variant="ghost" className="w-full justify-between rounded-2xl h-14 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50" asChild>
                <Link href={`/chat/group/${params.groupId}/media`}>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-500">
                      <ImageIcon className="h-5 w-5" />
                    </div>
                    <span className="font-bold">Shared Media & Files</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-300" />
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-between rounded-2xl h-14 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 text-red-500 hover:text-red-600">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                    <LogOut className="h-5 w-5" />
                  </div>
                  <span className="font-bold">Leave Group</span>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-300" />
              </Button>
            </CardContent>
          </Card>

          {/* Members List */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Members (12)</h3>
              <Button variant="ghost" size="sm" className="rounded-full gap-2 text-blue-500 font-bold">
                <Plus className="h-4 w-4" /> Add
              </Button>
            </div>
            <div className="space-y-1">
              {MEMBERS.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-12 w-12 border border-zinc-100 dark:border-zinc-800">
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      {member.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white dark:border-black rounded-full" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{member.name}</p>
                      <p className="text-xs text-zinc-500 font-medium italic">Last seen recently</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {member.role === "Admin" && (
                      <Badge className="bg-blue-500/10 text-blue-600 border-none h-5 px-2 rounded-full text-[9px] font-black uppercase">Admin</Badge>
                    )}
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-500">
                      <UserMinus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}
