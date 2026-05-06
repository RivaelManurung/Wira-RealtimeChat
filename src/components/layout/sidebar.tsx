"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  MessageSquare, 
  Search, 
  Plus, 
  MoreHorizontal,
  Archive,
  Star,
  LogOut,
  Settings,
  Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";

const CONVERSATIONS = [
  { id: "1", name: "Sarah Wilson", lastMsg: "See you tomorrow! 👋", time: "10:30 AM", unread: 2, online: true },
  { id: "2", name: "Design Team", lastMsg: "Mike: The new icons look great.", time: "9:45 AM", unread: 0, online: false },
  { id: "3", name: "John Doe", lastMsg: "Can you send the file?", time: "Yesterday", unread: 0, online: true },
  { id: "4", name: "Marketing", lastMsg: "Elena: Campaign is live! 🚀", time: "Mon", unread: 5, online: false },
];

export function Sidebar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col h-full bg-[#FAFCF9] relative">
      <aside className="flex-1 flex flex-col overflow-hidden">
        <div className="p-8 pb-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-black tracking-tighter text-[#1C3422]">Messages</h1>
            <div className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-[#1C3422] cursor-pointer" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-zinc-100 transition-all">
                    <MoreHorizontal className="h-5 w-5 text-[#1C3422]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  sideOffset={8}
                  className="w-56 glass rounded-[2rem] p-2.5 shadow-2xl shadow-zinc-900/10 border-white/50 animate-in fade-in zoom-in-95 duration-200"
                >
                  <DropdownMenuItem className="rounded-[1.2rem] font-bold text-[#1C3422] focus:bg-[#1C3422] focus:text-white gap-3 py-3 px-4 cursor-pointer transition-colors group">
                    <Archive className="h-4.5 w-4.5 opacity-70 group-focus:text-white" />
                    <span className="text-sm">Archived Chats</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-[1.2rem] font-bold text-[#1C3422] focus:bg-[#1C3422] focus:text-white gap-3 py-3 px-4 cursor-pointer transition-colors group">
                    <Star className="h-4.5 w-4.5 opacity-70 group-focus:text-white" />
                    <span className="text-sm">Starred Messages</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-zinc-100/50 my-2" />
                  <DropdownMenuItem className="rounded-[1.2rem] font-bold text-[#1C3422] focus:bg-[#1C3422] focus:text-white gap-3 py-3 px-4 cursor-pointer transition-colors group">
                    <Settings className="h-4.5 w-4.5 opacity-70 group-focus:text-white" />
                    <span className="text-sm">Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-[1.2rem] font-bold text-red-500 focus:bg-red-500 focus:text-white gap-3 py-3 px-4 cursor-pointer transition-colors group">
                    <LogOut className="h-4.5 w-4.5 opacity-70 group-focus:text-white" />
                    <span className="text-sm">Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input 
              placeholder="Search conversations" 
              className="pl-12 h-14 bg-zinc-100/50 border-none rounded-2xl focus-visible:ring-0 font-sans text-sm font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <ScrollArea className="flex-1 px-4">
          <div className="space-y-2 py-2">
            {CONVERSATIONS.map((chat) => (
              <Link 
                key={chat.id} 
                href={`/chat/dm/${chat.id}`}
                className={`
                  flex items-center gap-4 p-4 rounded-[2rem] transition-all duration-500
                  ${pathname.includes(chat.id) 
                    ? "bg-[#1C3422] text-white shadow-xl shadow-[#1C3422]/20" 
                    : "hover:bg-zinc-100 text-[#1C3422]"}
                `}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                    <AvatarFallback className="font-black bg-zinc-100">{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className={`text-sm font-bold truncate ${pathname.includes(chat.id) ? "text-white" : "text-[#1C3422]"}`}>
                      {chat.name}
                    </p>
                    <span className={`text-[10px] font-bold ${pathname.includes(chat.id) ? "text-white/60" : "text-zinc-400"}`}>
                      {chat.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className={`text-xs font-medium line-clamp-1 ${pathname.includes(chat.id) ? "text-white/80" : "text-zinc-500"}`}>
                      {chat.lastMsg}
                    </p>
                    {chat.unread > 0 && !pathname.includes(chat.id) && (
                      <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-[10px] font-black text-white">{chat.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>

        {/* Profile Bottom Section */}
        <div className="p-4 mt-auto">
          <div className="bg-white rounded-3xl p-4 flex items-center justify-between shadow-sm border border-zinc-50">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-zinc-100 font-bold">AR</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold text-[#1C3422]">Alex Rivai</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-green-500 rounded-full" />
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Available</span>
                </div>
              </div>
            </div>
            <Settings className="h-5 w-5 text-zinc-400 cursor-pointer hover:text-[#1C3422] transition-colors" />
          </div>
        </div>
      </aside>

      {/* Floating Theme Toggle */}
      <div className="absolute -left-12 bottom-0">
        <Button size="icon" className="h-12 w-12 rounded-full bg-[#1C3422] text-white shadow-xl hover:scale-110 transition-all">
          <Moon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
