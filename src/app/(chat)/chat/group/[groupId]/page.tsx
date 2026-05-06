"use client"

import { ScrollArea } from "@/components/ui/scroll-area";
import { GroupHeader } from "@/components/chat/group-header";
import { MessageBubble } from "@/components/chat/message-bubble";
import { ChatInput } from "@/components/chat/chat-input";

const GROUP_MESSAGES = [
  { id: "1", sender: "other", senderName: "Sarah Wilson", text: "Did everyone see the new design specs?", time: "2:00 PM", status: "read" },
  { id: "2", sender: "other", senderName: "John Doe", text: "Yes, looks much better with the Geist font! 🚀", time: "2:05 PM", status: "read" },
  { id: "3", sender: "me", text: "I've started implementing the sidebar logic.", time: "2:10 PM", status: "read" },
  { id: "4", sender: "other", senderName: "Elena", text: "Great! I'll handle the notification module.", time: "2:15 PM", status: "read" },
] as const;

export default function GroupChatPage() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900">
      <GroupHeader name="Product Design Team" memberCount={12} />

      <ScrollArea className="flex-1 p-6">
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          <div className="flex justify-center py-8">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400">
              Today
            </span>
          </div>
          
          {GROUP_MESSAGES.map((m) => (
            <MessageBubble key={m.id} {...m} />
          ))}
        </div>
      </ScrollArea>

      <footer className="p-6 pt-2 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
        <ChatInput onSendMessage={(msg) => console.log("Group msg:", msg)} />
      </footer>
    </div>
  );
}
