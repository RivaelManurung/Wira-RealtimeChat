"use client"

import { useState } from "react";
import { Search as SearchIcon, User, MessageSquare, Users, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col h-full bg-white dark:bg-black overflow-hidden">
      {/* Search Header */}
      <div className="p-8 pb-0 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold tracking-tight">Search</h1>
          <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 bg-zinc-100 dark:bg-zinc-900">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input 
            placeholder="Search messages, people, or groups" 
            className="h-16 pl-12 bg-zinc-100 dark:bg-zinc-900 border-none rounded-[1.5rem] text-lg focus-visible:ring-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-700"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-transparent h-auto p-0 gap-6 border-b border-zinc-100 dark:border-zinc-800 w-full justify-start rounded-none">
            {["all", "messages", "people", "groups"].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab} 
                className="capitalize px-0 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 dark:data-[state=active]:border-white data-[state=active]:bg-transparent font-bold text-zinc-500 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-white transition-all"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="py-8">
            <TabsContent value="all" className="m-0 space-y-8">
              {!query ? (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                  <div className="h-20 w-20 bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] flex items-center justify-center">
                    <SearchIcon className="h-8 w-8 text-zinc-400" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Find anything</h3>
                    <p className="text-zinc-500 max-w-xs mx-auto">Search through all your messages, contacts, and community groups.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <section className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Recent Results</h3>
                    <div className="grid gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 cursor-pointer transition-all border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800">
                          <Avatar className="h-12 w-12 rounded-2xl">
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold truncate">User Result {i}</p>
                            <p className="text-xs text-zinc-500 truncate">Joined 2 days ago</p>
                          </div>
                          <Button variant="ghost" size="icon" className="rounded-full">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
