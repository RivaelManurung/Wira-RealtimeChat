"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock, ShieldAlert } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-8 text-center font-sans">
      <div className="max-w-md w-full p-12 rounded-[3rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-2xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="h-24 w-24 bg-red-50 dark:bg-red-900/20 rounded-[2rem] mx-auto flex items-center justify-center">
          <Lock className="h-10 w-10 text-red-500" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight">Akses Ditolak</h1>
          <p className="text-zinc-500 font-medium">
            Anda tidak memiliki izin untuk mengakses halaman ini. Silakan login terlebih dahulu.
          </p>
        </div>

        <div className="pt-4 space-y-3">
          <Button className="w-full rounded-full h-14 bg-zinc-900 text-white dark:bg-white dark:text-black font-bold text-lg shadow-lg" asChild>
            <Link href="/login">Login Sekarang</Link>
          </Button>
          <Button variant="ghost" className="w-full rounded-full h-14 font-bold text-zinc-500" asChild>
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
          <ShieldAlert className="h-3 w-3" /> Area Terproteksi
        </div>
      </div>
    </div>
  );
}
