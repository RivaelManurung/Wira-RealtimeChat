"use client"

import { Camera, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MemberSelector } from "@/components/chat/member-selector";
import Link from "next/link";

export default function CreateGroupPage() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-black overflow-hidden">
      {/* Header */}
      <header className="h-20 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between px-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 -ml-2" asChild>
            <Link href="/chat">
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-xl font-black tracking-tight">Create New Group</h1>
        </div>
        <Button className="rounded-full px-8 bg-zinc-900 text-white dark:bg-white dark:text-black font-bold h-11">
          Create Group
        </Button>
      </header>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Basic Info */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative group">
              <div className="h-32 w-32 rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-all cursor-pointer">
                <Camera className="h-8 w-8 text-zinc-400 group-hover:text-zinc-600" />
              </div>
              <p className="text-[10px] text-center mt-2 font-bold uppercase tracking-widest text-zinc-400">Photo</p>
            </div>
            
            <div className="flex-1 space-y-4 w-full">
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Group Name</h3>
                <Input 
                  placeholder="E.g. Product Designers" 
                  className="h-14 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl text-lg font-bold placeholder:font-medium"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Description (Optional)</h3>
                <Textarea 
                  placeholder="What's this group about?" 
                  className="bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl min-h-[100px] resize-none"
                />
              </div>
            </div>
          </section>

          {/* Member Selection */}
          <MemberSelector />
        </div>
      </div>
    </div>
  );
}
