"use client"

import { 
  ImageIcon, 
  FileText, 
  Play, 
  Search, 
  ChevronLeft,
  Filter,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function SharedMediaPage({ params }: { params: { roomId: string } }) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-black overflow-hidden font-sans">
      {/* Header */}
      <header className="h-20 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between px-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 -ml-2" asChild>
            <Link href={`/chat`}>
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-xl font-black tracking-tight">Shared Media</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-zinc-500">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Media Search */}
      <div className="px-8 pt-6 pb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <Input 
            placeholder="Search in media..." 
            className="pl-10 h-12 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl"
          />
        </div>
      </div>

      <Tabs defaultValue="media" className="flex-1 flex flex-col overflow-hidden">
        <div className="px-8">
          <TabsList className="bg-transparent h-auto p-0 gap-6 border-b border-zinc-100 dark:border-zinc-800 w-full justify-start rounded-none">
            {[
              { id: "media", label: "Media", icon: ImageIcon },
              { id: "files", label: "Files", icon: FileText },
              { id: "links", label: "Links", icon: Play },
            ].map((tab) => (
              <TabsTrigger 
                key={tab.id}
                value={tab.id} 
                className="px-0 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 dark:data-[state=active]:border-white data-[state=active]:bg-transparent font-bold text-zinc-500 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-white transition-all flex gap-2 items-center"
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <ScrollArea className="flex-1 p-8 pt-6">
          <TabsContent value="media" className="m-0">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-2xl hover:opacity-80 transition-opacity cursor-pointer border border-zinc-200 dark:border-zinc-800 flex items-center justify-center relative group">
                   <ImageIcon className="h-6 w-6 text-zinc-300" />
                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="files" className="m-0 space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-sm">
                    <FileText className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold truncate max-w-[200px]">Project_Proposal_v{i}.pdf</p>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">2.4 MB • JAN {10+i}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}
