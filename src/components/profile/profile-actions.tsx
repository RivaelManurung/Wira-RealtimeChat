"use client"

import { MessageSquare, ShieldAlert, UserPlus, UserMinus, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileActionsProps {
  isFriend: boolean;
}

export function ProfileActions({ isFriend }: ProfileActionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button className="flex-1 rounded-full h-12 bg-zinc-900 text-white dark:bg-white dark:text-black font-bold gap-2">
        <MessageSquare className="h-4 w-4" /> Kirim Pesan
      </Button>
      <Button variant="outline" className="rounded-full h-12 px-6 font-bold gap-2 border-zinc-200 dark:border-zinc-700">
        {isFriend ? <UserMinus className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
        {isFriend ? "Hapus Teman" : "Tambah Teman"}
      </Button>
      <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-zinc-200 dark:border-zinc-700 text-zinc-500">
        <Share2 className="h-4 w-4" />
      </Button>
      <Button variant="ghost" className="w-full mt-2 rounded-2xl h-12 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 font-bold gap-2">
        <ShieldAlert className="h-4 w-4" /> Blokir Pengguna
      </Button>
    </div>
  );
}
