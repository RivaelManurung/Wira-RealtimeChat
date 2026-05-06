"use client"

import { 
  ChevronLeft, 
  MapPin, 
  Users, 
  MoreHorizontal,
  Calendar,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProfileActions } from "@/components/profile/profile-actions";
import Link from "next/link";

export default function UserProfilePage({ params }: { params: { userId: string } }) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-black overflow-hidden font-sans">
      {/* Dynamic Header */}
      <header className="h-20 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between px-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shrink-0 z-20">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 -ml-2" asChild>
            <Link href="/chat">
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <div className="flex flex-col">
            <h1 className="text-base font-black leading-none">Sarah Wilson</h1>
            <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest mt-1">Online</span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-zinc-500">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </header>

      <ScrollArea className="flex-1">
        <div className="max-w-2xl mx-auto p-8 space-y-12 pb-20">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <Avatar className="h-32 w-32 rounded-[2.5rem] border-4 border-zinc-50 dark:border-zinc-900 shadow-2xl">
                <AvatarFallback className="text-4xl font-black">SW</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-8 w-8 bg-green-500 border-4 border-white dark:border-black rounded-full" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-3xl font-black tracking-tight">Sarah Wilson</h2>
                <Badge className="bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border-none rounded-full px-2 h-5 text-[9px] font-black uppercase tracking-tighter">Contributor</Badge>
              </div>
              <p className="text-zinc-500 font-medium italic">@sarah_wilson</p>
            </div>

            <ProfileActions isFriend={true} />
          </section>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-10">
              <section className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">Bio</h3>
                <p className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 font-medium">
                  Senior UI/UX Designer at Apple. I love minimalist architecture and clean code. Obsessed with Geist and San Francisco typography. 🏔️
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">Personal Info</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                    <MapPin className="h-5 w-5 text-zinc-400" />
                    <span className="text-sm font-bold">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                    <Globe className="h-5 w-5 text-zinc-400" />
                    <span className="text-sm font-bold">sarah.design</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                    <Calendar className="h-5 w-5 text-zinc-400" />
                    <span className="text-sm font-bold">Januari 2024</span>
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <Card className="rounded-[2rem] border-zinc-100 dark:border-zinc-800 apple-shadow overflow-hidden">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Common Connections</h3>
                  <Link href={`/profile/${params.userId}/groups`} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-500">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold group-hover:text-blue-500 transition-colors">Mutual Groups</p>
                        <p className="text-[10px] text-zinc-400 font-medium italic">4 Groups Shared</p>
                      </div>
                    </div>
                    <ChevronLeft className="h-4 w-4 rotate-180 text-zinc-300" />
                  </Link>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
