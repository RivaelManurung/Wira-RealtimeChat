"use client"

import { useState } from "react";
import { Smile, Plus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage: (msg: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [msg, setMsg] = useState("");

  const handleSend = () => {
    if (msg.trim()) {
      onSendMessage(msg);
      setMsg("");
    }
  };

  return (
    <div className="flex items-end gap-3 max-w-4xl mx-auto bg-zinc-100 dark:bg-zinc-800 p-2 rounded-[2rem] apple-shadow">
      <Button variant="ghost" size="icon" className="rounded-full h-11 w-11 shrink-0 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700">
        <Plus className="h-6 w-6" />
      </Button>
      <div className="relative flex-1">
        <Input 
          placeholder="iMessage" 
          className="border-none bg-transparent h-11 text-[15px] focus-visible:ring-0 placeholder:text-zinc-500 font-medium"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
      </div>
      <Button variant="ghost" size="icon" className="rounded-full h-11 w-11 shrink-0 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700">
        <Smile className="h-6 w-6" />
      </Button>
      <Button 
        onClick={handleSend}
        className={`
          rounded-full h-11 w-11 shrink-0 transition-all duration-300
          ${msg.trim() 
            ? "bg-zinc-900 text-white dark:bg-white dark:text-black scale-100 opacity-100" 
            : "bg-zinc-200 text-zinc-400 dark:bg-zinc-700 dark:text-zinc-500 scale-90 opacity-50"}
        `}
        disabled={!msg.trim()}
      >
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
}
