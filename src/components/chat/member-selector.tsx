"use client"

import { useState } from "react";
import { Search, X, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const MOCK_USERS = [
  { id: "1", name: "Sarah Wilson", username: "sarahw" },
  { id: "2", name: "John Doe", username: "johnd" },
  { id: "3", name: "Elena Smith", username: "elenas" },
  { id: "4", name: "Mike Ross", username: "miker" },
  { id: "5", name: "Jessica Pearson", username: "jessica" },
];

export function MemberSelector() {
  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const toggleUser = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    );
  };

  const selectedUsers = MOCK_USERS.filter(u => selected.includes(u.id));

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Invite Members</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <Input 
            placeholder="Search people..." 
            className="pl-10 h-12 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
          {selectedUsers.map((user) => (
            <Badge 
              key={user.id} 
              variant="secondary" 
              className="pl-1 pr-2 py-1 h-8 rounded-full gap-2 bg-zinc-100 dark:bg-zinc-800 border-none text-sm font-bold"
            >
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-[10px]">{user.name[0]}</AvatarFallback>
              </Avatar>
              {user.name}
              <X 
                className="h-3 w-3 cursor-pointer hover:text-red-500" 
                onClick={() => toggleUser(user.id)}
              />
            </Badge>
          ))}
        </div>
      )}

      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-1">
          {MOCK_USERS.map((user) => (
            <div 
              key={user.id}
              onClick={() => toggleUser(user.id)}
              className={`
                flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all
                ${selected.includes(user.id) 
                  ? "bg-zinc-100 dark:bg-zinc-800" 
                  : "hover:bg-zinc-50 dark:hover:bg-zinc-900/50"}
              `}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-zinc-100 dark:border-zinc-800">
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-bold">{user.name}</p>
                  <p className="text-xs text-zinc-500 font-medium italic">@{user.username}</p>
                </div>
              </div>
              <div className={`
                h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all
                ${selected.includes(user.id) 
                  ? "bg-zinc-900 border-zinc-900 dark:bg-white dark:border-white" 
                  : "border-zinc-200 dark:border-zinc-700"}
              `}>
                {selected.includes(user.id) && <Check className="h-4 w-4 text-white dark:text-black" />}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
