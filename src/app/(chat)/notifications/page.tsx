"use client"

import { 
  Bell, 
  AtSign, 
  Users, 
  Settings, 
  ChevronRight,
  MessageSquare,
  UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const NOTIFICATIONS = [
  { id: "1", type: "mention", title: "Sarah Wilson mentioned you", desc: "Hey, check out the new design!", time: "2m ago", read: false },
  { id: "2", type: "group", title: "New Group Invite", desc: "You've been invited to 'Designers UI'", time: "1h ago", read: false },
  { id: "3", type: "system", title: "System Update", desc: "RealtimeChat v2.0 is now live.", time: "3h ago", read: true },
  { id: "4", type: "follow", title: "New Follower", desc: "John Doe started following you", time: "Yesterday", read: true },
];

export default function NotificationsPage() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-black overflow-hidden font-sans">
      <header className="p-8 pb-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight">Notifications</h1>
          <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 bg-zinc-100 dark:bg-zinc-900">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-transparent h-auto p-0 gap-6 border-b border-zinc-100 dark:border-zinc-800 w-full justify-start rounded-none">
            {[
              { id: "all", label: "All", icon: Bell },
              { id: "mentions", label: "Mentions", icon: AtSign },
              { id: "groups", label: "Groups", icon: Users },
            ].map((tab) => (
              <TabsTrigger 
                key={tab.id}
                value={tab.id} 
                className="px-0 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 dark:data-[state=active]:border-white data-[state=active]:bg-transparent font-bold text-zinc-500 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-white transition-all flex gap-2 items-center"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <ScrollArea className="h-[calc(100vh-250px)] mt-4">
            <TabsContent value="all" className="m-0 space-y-2 pb-20">
              {NOTIFICATIONS.map((n) => (
                <div 
                  key={n.id}
                  className={`
                    flex items-center justify-between p-4 rounded-3xl transition-all border border-transparent cursor-pointer group
                    ${n.read ? "hover:bg-zinc-50 dark:hover:bg-zinc-900/50" : "bg-blue-50/30 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30"}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      h-12 w-12 rounded-2xl flex items-center justify-center
                      ${n.type === 'mention' ? 'bg-amber-100 text-amber-600' : 
                        n.type === 'group' ? 'bg-blue-100 text-blue-600' : 'bg-zinc-100 text-zinc-600'}
                    `}>
                      {n.type === 'mention' ? <AtSign className="h-5 w-5" /> : 
                       n.type === 'group' ? <Users className="h-5 w-5" /> : <Bell className="h-5 w-5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold">{n.title}</p>
                        {!n.read && <Badge className="h-2 w-2 rounded-full bg-blue-500 p-0 border-none" />}
                      </div>
                      <p className="text-xs text-zinc-500 font-medium italic">{n.desc}</p>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase mt-1">{n.time}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-all" />
                </div>
              ))}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </header>
    </div>
  );
}
