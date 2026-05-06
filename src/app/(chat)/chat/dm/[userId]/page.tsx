"use client"

import { 
  MoreVertical, 
  Phone, 
  Video, 
  ChevronLeft,
  User,
  Search,
  BellOff,
  ShieldAlert,
  Plus,
  Smile,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { MessageBubble } from "@/components/chat/message-bubble";
import { ChatInput } from "@/components/chat/chat-input";

const MESSAGES = [
  { id: "1", sender: "other", text: "Hey! How is the project going?", time: "10:30 AM", status: "read" },
  { id: "2", sender: "me", text: "It's going great! Just finished the auth flow with Geist font.", time: "10:32 AM", status: "read" },
  { id: "3", sender: "other", text: "Awesome! The Apple-like design is stunning. 🍎", time: "10:33 AM", status: "read" },
  { id: "4", sender: "me", text: "I'll send you a demo later today. 🚀", time: "10:35 AM", status: "sent" },
  { id: "5", sender: "other", text: "Perfect. Looking forward to it!", time: "10:36 AM", status: "read" },
] as const;

export default function DMPage({ params }: { params: { userId: string } }) {
  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Chat Header */}
      <header className="h-20 border-b border-zinc-50 flex items-center justify-between px-8 bg-white/80 backdrop-blur-xl z-10 sticky top-0">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="h-11 w-11 border border-zinc-100 shadow-sm">
              <AvatarFallback className="bg-zinc-100 font-bold text-[#1C3422]">S</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
          </div>
          <div>
            <h2 className="text-base font-black text-[#1C3422] leading-none mb-1">Sarah Wilson</h2>
            <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider">Active now</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="h-5 w-5 text-[#1C3422] cursor-pointer hover:opacity-70 transition-opacity" />
          <Video className="h-5 w-5 text-[#1C3422] cursor-pointer hover:opacity-70 transition-opacity" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-zinc-100">
                <MoreVertical className="h-5 w-5 text-[#1C3422]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              sideOffset={8}
              className="w-56 glass rounded-[2rem] p-2.5 shadow-2xl shadow-zinc-900/10 border-white/50 animate-in fade-in zoom-in-95 duration-200"
            >
              <DropdownMenuItem className="rounded-[1.2rem] font-bold text-[#1C3422] focus:bg-[#1C3422] focus:text-white gap-3 py-3 px-4 cursor-pointer transition-colors group">
                <User className="h-4.5 w-4.5 opacity-70 group-focus:text-white" />
                <span className="text-sm">View Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-[1.2rem] font-bold text-[#1C3422] focus:bg-[#1C3422] focus:text-white gap-3 py-3 px-4 cursor-pointer transition-colors group">
                <Search className="h-4.5 w-4.5 opacity-70 group-focus:text-white" />
                <span className="text-sm">Search Messages</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-[1.2rem] font-bold text-[#1C3422] focus:bg-[#1C3422] focus:text-white gap-3 py-3 px-4 cursor-pointer transition-colors group">
                <BellOff className="h-4.5 w-4.5 opacity-70 group-focus:text-white" />
                <span className="text-sm">Mute Notifications</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-100/50 my-2" />
              <DropdownMenuItem className="rounded-[1.2rem] font-bold text-red-500 focus:bg-red-500 focus:text-white gap-3 py-3 px-4 cursor-pointer transition-colors group">
                <ShieldAlert className="h-4.5 w-4.5 opacity-70 group-focus:text-white" />
                <span className="text-sm">Block User</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-8">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-center items-center gap-4 py-8">
            <div className="h-px bg-zinc-100 flex-1" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400">
              Monday, Jan 12
            </span>
            <div className="h-px bg-zinc-100 flex-1" />
          </div>
          
          {MESSAGES.map((m) => (
            <MessageBubble key={m.id} {...m} />
          ))}
        </div>
      </ScrollArea>

      {/* Pill Input Area */}
      <footer className="p-8 pt-2 bg-white">
        <div className="w-full relative group">
          <div className="flex items-center gap-3 bg-[#F8FAf7] rounded-[2.5rem] p-2 pr-3 shadow-inner border border-zinc-100/50">
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-zinc-400 hover:bg-white hover:text-[#1C3422] transition-all">
              <Plus className="h-5 w-5" />
            </Button>
            <input 
              placeholder="iMessage" 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium text-[#1C3422] placeholder:text-zinc-400 px-2"
            />
            <div className="flex items-center gap-2">
              <Smile className="h-5 w-5 text-zinc-400 cursor-pointer hover:text-[#1C3422]" />
              <Button size="icon" className="rounded-full h-10 w-10 bg-[#1C3422] text-white shadow-lg hover:scale-105 active:scale-95 transition-all">
                <Send className="h-4 w-4 rotate-45" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
