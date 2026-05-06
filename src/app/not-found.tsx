"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black p-8 text-center font-sans">
      <div className="space-y-6 animate-in fade-in zoom-in duration-700">
        <div className="relative">
          <h1 className="text-[12rem] font-black leading-none tracking-tighter text-zinc-100 dark:text-zinc-900 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 bg-zinc-900 dark:bg-white rounded-[3rem] shadow-2xl flex items-center justify-center transform -rotate-12">
               <span className="text-white dark:text-black text-6xl font-black">?</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-3xl font-black tracking-tight">Halaman Tidak Ditemukan</h2>
          <p className="text-zinc-500 max-w-sm mx-auto font-medium">
            Sepertinya Anda tersesat di ruang hampa. Halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button variant="outline" className="rounded-full px-8 h-12 font-bold gap-2 border-zinc-200 dark:border-zinc-800" asChild>
            <Link href="/chat">
              <ChevronLeft className="h-4 w-4" /> Kembali
            </Link>
          </Button>
          <Button className="rounded-full px-8 h-12 bg-zinc-900 text-white dark:bg-white dark:text-black font-bold gap-2 shadow-xl" asChild>
            <Link href="/">
              <Home className="h-4 w-4" /> Beranda
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
