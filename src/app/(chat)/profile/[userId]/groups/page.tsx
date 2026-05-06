"use client"

import { ChevronLeft, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const MUTUAL_GROUPS = [
  { id: "1", name: "Product Design Team", members: 12, lastActive: "2m ago" },
  { id: "2", name: "Apple Enthusiasts", members: 142, lastActive: "1h ago" },
  { id: "3", name: "Next.js Developers", members: 84, lastActive: "Yesterday" },
  { id: "4", name: "Minimalist UI", members: 32, lastActive: "Mon" },
];

export default function MutualGroupsPage({ params }: { params: { userId: string } }) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-black overflow-hidden font-sans">
      {/* Header */}
      <header className="h-20 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between px-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 -ml-2" asChild>
            <Link href={`/profile/${params.userId}`}>
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <div className="flex flex-col">
            <h1 className="text-base font-black leading-none">Mutual Groups</h1>
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Shared with Sarah</span>
          </div>
        </div>
      </header>

      <ScrollArea className="flex-1">
        <div className="max-w-2xl mx-auto p-8 space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center space-y-3 mb-8">
            <div className="h-16 w-16 bg-white dark:bg-black rounded-2xl mx-auto flex items-center justify-center shadow-sm">
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-sm text-zinc-500 font-medium max-w-[250px] mx-auto">You and Sarah are both members of these {MUTUAL_GROUPS.length} groups.</p>
          </div>

          <div className="space-y-2">
            {MUTUAL_GROUPS.map((group) => (
              <Link 
                key={group.id} 
                href={`/chat/group/${group.id}`}
                className="flex items-center justify-between p-4 rounded-3xl hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-all border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 group"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                    <AvatarFallback className="font-black text-lg">{group.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-base">{group.name}</p>
                    <p className="text-xs text-zinc-500 font-medium italic">{group.members} Members • Active {group.lastActive}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
