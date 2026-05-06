"use client"

import { UserMinus, ShieldOff, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const BLOCKED_USERS = [
  { id: "1", name: "Spammer One", username: "spam1", date: "Jan 12, 2026" },
  { id: "2", name: "Toxic Player", username: "toxic", date: "Jan 15, 2026" },
];

export default function BlockedUsersSettings() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-1">Blocked Users</h2>
          <p className="text-sm text-zinc-500 font-medium italic">Manage people you have blocked. They won't be able to message you or see your status.</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <Input 
            placeholder="Search blocked users..." 
            className="pl-10 h-12 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl"
          />
        </div>

        {BLOCKED_USERS.length > 0 ? (
          <div className="space-y-2">
            {BLOCKED_USERS.map((user) => (
              <div key={user.id} className="p-4 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-zinc-100 dark:border-zinc-800 rounded-2xl">
                    <AvatarFallback className="font-bold">{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold">{user.name}</p>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Blocked on {user.date}</p>
                  </div>
                </div>
                <Button variant="outline" className="rounded-full px-6 font-bold border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  Unblock
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
            <div className="h-20 w-20 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] flex items-center justify-center">
              <ShieldOff className="h-8 w-8 text-zinc-300" />
            </div>
            <p className="text-sm text-zinc-500 font-medium">You haven't blocked anyone yet.</p>
          </div>
        )}
      </section>
    </div>
  );
}
