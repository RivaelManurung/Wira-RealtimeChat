"use client"

import { Search, Send, X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const RECENT_CHATS = [
  { id: "1", name: "Sarah Wilson", type: "User" },
  { id: "2", name: "Product Design", type: "Group" },
  { id: "3", name: "Mike Ross", type: "User" },
  { id: "4", name: "Marketing Team", type: "Group" },
];

interface ForwardModalProps {
  isOpen: boolean;
  onClose: () => void;
  messageId: string;
}

export function ForwardModal({ isOpen, onClose, messageId }: ForwardModalProps) {
  const [query, setQuery] = useState("");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden rounded-[2.5rem] border-none apple-shadow bg-white dark:bg-zinc-900">
        <DialogHeader className="p-6 pb-0 flex flex-row items-center justify-between">
          <div className="space-y-1">
            <DialogTitle className="text-2xl font-black">Forward Message</DialogTitle>
            <DialogDescription className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Select destination</DialogDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full h-10 w-10 text-zinc-400">
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>

        <div className="p-6 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input 
              placeholder="Search chats..." 
              className="pl-10 h-12 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <ScrollArea className="h-[300px]">
            <div className="space-y-1">
              <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Recent Chats</h3>
              {RECENT_CHATS.map((chat) => (
                <div 
                  key={chat.id}
                  className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11 border border-zinc-100 dark:border-zinc-800">
                      <AvatarFallback>{chat.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-bold">{chat.name}</p>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{chat.type}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-blue-500 bg-blue-50 dark:bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
