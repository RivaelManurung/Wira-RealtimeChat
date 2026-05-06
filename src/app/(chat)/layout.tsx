"use client"

import { Sidebar } from "@/components/layout/sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#F2F5F1] p-4 md:p-6 lg:p-8 gap-6 overflow-hidden font-sans transition-all duration-700">
      {/* Sidebar Island */}
      <div className="w-80 flex flex-col h-full bg-[#FAFCF9] rounded-[2.5rem] shadow-2xl shadow-zinc-900/5 border border-white dark:border-zinc-800/50 overflow-hidden relative">
        <Sidebar />
      </div>

      {/* Chat Island */}
      <main className="flex-1 bg-white rounded-[2.5rem] shadow-2xl shadow-zinc-900/5 border border-white dark:border-zinc-800/50 overflow-hidden relative flex flex-col">
        {children}
      </main>
    </div>
  );
}
