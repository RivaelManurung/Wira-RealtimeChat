"use client"

import { ShieldCheck, Smartphone, Monitor, LogOut, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SESSIONS = [
  { id: "1", device: "iPhone 15 Pro", location: "Jakarta, ID", status: "Current Session", icon: Smartphone },
  { id: "2", device: "MacBook Pro 16\"", location: "Jakarta, ID", status: "Active 2h ago", icon: Monitor },
];

export default function SecuritySettings() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-1">Security</h2>
          <p className="text-sm text-zinc-500 font-medium italic">Keep your account safe and monitor active sessions.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Authentication</h3>
          <div className="p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-500">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-base font-bold">Two-Factor Authentication</p>
                  <p className="text-xs text-zinc-500 font-medium">Add an extra layer of security to your account.</p>
                </div>
              </div>
              <Button className="rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black font-bold px-6">
                Enable
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Active Sessions</h3>
          <div className="space-y-2">
            {SESSIONS.map((session) => (
              <div key={session.id} className="p-5 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-zinc-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
                    <session.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold">{session.device}</p>
                      {session.id === "1" && <Badge className="bg-green-500/10 text-green-600 border-none rounded-full px-2 text-[9px] font-black uppercase">Active</Badge>}
                    </div>
                    <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{session.location} • {session.status}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-zinc-400 hover:text-red-500">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full rounded-2xl h-12 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/20">
            Sign out of all other sessions
          </Button>
        </div>
      </section>
    </div>
  );
}
