"use client"

import { useState } from "react";
import { Search, ChevronLeft, MessageSquare, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const SUGGESTED_PEOPLE = [
  { id: "1", name: "Alex Rivai", username: "alexr", bio: "Building things..." },
  { id: "2", name: "Sarah Wilson", username: "sarahw", bio: "Designer @ Apple" },
  { id: "3", name: "Elena Smith", username: "elenas", bio: "Frontend Engineer" },
  { id: "4", name: "Mike Ross", username: "miker", bio: "Lawyer & Developer" },
];

export default function NewChatPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col h-full bg-white dark:bg-black overflow-hidden">
      {/* Header */}
      <header className="h-20 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between px-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 -ml-2" asChild>
            <Link href="/chat">
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-xl font-black tracking-tight">New Message</h1>
        </div>
        <Button variant="ghost" className="rounded-full gap-2 font-bold text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20" asChild>
          <Link href="/chat/group/new">
            <Plus className="h-4 w-4" /> Create Group
          </Link>
        </Button>
      </header>

      {/* Search Bar */}
      <div className="p-8 pb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input 
            placeholder="Search by name or @username" 
            className="h-14 pl-12 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl text-base font-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Discovery Content */}
      <ScrollArea className="flex-1 px-8">
        <div className="max-w-2xl mx-auto space-y-8 py-4">
          <section className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Suggested People</h3>
            <div className="grid gap-2">
              {SUGGESTED_PEOPLE.map((user) => (
                <div 
                  key={user.id}
                  className="flex items-center justify-between p-4 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 cursor-pointer transition-all border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 group"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                      <AvatarFallback className="text-lg font-bold">{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="font-bold text-base">{user.name}</p>
                      <p className="text-sm text-zinc-500 font-medium italic mb-1">@{user.username}</p>
                      <p className="text-xs text-zinc-400 truncate max-w-[200px]">{user.bio}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full h-12 w-12 bg-zinc-100 dark:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity"
                    asChild
                  >
                    <Link href={`/chat/dm/${user.id}`}>
                      <MessageSquare className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Invite Your Friends</h3>
            <div className="p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center space-y-4">
              <div className="h-16 w-16 bg-white dark:bg-black rounded-2xl mx-auto flex items-center justify-center shadow-sm">
                <Plus className="h-8 w-8 text-blue-500" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg">Connect more people</p>
                <p className="text-sm text-zinc-500 max-w-[250px] mx-auto">Share your profile link to start chatting with anyone on RealtimeChat.</p>
              </div>
              <Button variant="outline" className="rounded-full px-8 font-bold border-zinc-200 dark:border-zinc-700">
                Copy Link
              </Button>
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}
