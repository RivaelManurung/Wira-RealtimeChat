"use client"

import { Check, CheckCheck } from "lucide-react";

interface MessageBubbleProps {
  sender: "me" | "other";
  text: string;
  time: string;
  status: "sent" | "read";
  senderName?: string;
}

export function MessageBubble({ sender, text, time, status, senderName }: MessageBubbleProps) {
  const isMe = sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
      <div className={`flex flex-col gap-1.5 max-w-[75%] ${isMe ? "items-end" : "items-start"}`}>
        <div 
          className={`
            px-5 py-3.5 transition-all shadow-sm
            ${isMe 
              ? "bg-[#1C3422] text-white rounded-[1.8rem] rounded-tr-none font-medium" 
              : "bg-[#E4EDE1] text-[#1C3422] rounded-[1.8rem] rounded-tl-none font-medium"}
          `}
        >
          {senderName && !isMe && (
            <span className="block text-[10px] font-black text-[#1C3422]/50 mb-1.5 uppercase tracking-[0.1em]">
              {senderName}
            </span>
          )}
          <p className="text-[14px] leading-relaxed font-bold">{text}</p>
        </div>
        <div className="flex items-center gap-2 px-1">
          <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
            {time}
          </span>
          {isMe && (
            status === "read" ? <CheckCheck className="h-3 w-3 text-blue-500 stroke-[3]" /> : <Check className="h-3 w-3 text-zinc-300 stroke-[3]" />
          )}
        </div>
      </div>
    </div>
  );
}
