"use client"

import { 
  Users, 
  Phone, 
  Video, 
  MoreVertical, 
  ChevronLeft,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface GroupHeaderProps {
  name: string;
  memberCount: number;
}

export function GroupHeader({ name, memberCount }: GroupHeaderProps) {
  return (
    <header className="h-20 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between px-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden rounded-full h-10 w-10 -ml-2">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex -space-x-3 overflow-hidden">
          <Avatar className="h-11 w-11 border-2 border-white dark:border-zinc-900 rounded-2xl shadow-sm z-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          <Avatar className="h-11 w-11 border-2 border-white dark:border-zinc-900 rounded-2xl shadow-sm z-10">
            <AvatarFallback className="bg-zinc-200 text-zinc-600">JD</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="text-base font-bold leading-none mb-1">{name}</h2>
          <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">
            {memberCount} Members • 5 Online
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="icon" className="rounded-full h-10 w-10 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700">
          <Video className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-1" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-zinc-500">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="rounded-2xl p-2 w-56">
            <DropdownMenuItem className="rounded-xl p-3 gap-3">
              <Info className="h-4 w-4" /> Group Info
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-xl p-3 gap-3">
              <Users className="h-4 w-4" /> View Members
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-xl p-3 gap-3 text-red-500">
              Leave Group
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
