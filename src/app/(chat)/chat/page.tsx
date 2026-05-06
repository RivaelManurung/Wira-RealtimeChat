import { MessageCircle } from "lucide-react";

export default function ChatDashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-zinc-50/30 dark:bg-zinc-900/10">
      <div className="h-20 w-20 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 animate-bounce">
        <MessageCircle className="h-10 w-10 text-zinc-400" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">Welcome to your Inbox</h2>
      <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
        Select a conversation from the sidebar to start chatting, or click the plus icon to start a new thread.
      </p>
    </div>
  );
}
