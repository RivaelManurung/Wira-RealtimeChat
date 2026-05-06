"use client"

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Mail, Volume2, MessageSquare } from "lucide-react";

export default function NotificationSettings() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-1">Notifications</h2>
          <p className="text-sm text-zinc-500 font-medium italic">Manage how and when you receive updates.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Push Notifications</h3>
          <div className="p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 space-y-6 bg-white dark:bg-zinc-900/50">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-zinc-400" />
                  <Label className="text-base font-bold">Main Alerts</Label>
                </div>
                <p className="text-xs text-zinc-500 font-medium">Receive alerts for messages and calls.</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
            </div>
            <div className="h-px bg-zinc-100 dark:border-zinc-800" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-zinc-400" />
                  <Label className="text-base font-bold">Message Previews</Label>
                </div>
                <p className="text-xs text-zinc-500 font-medium">Show sender and message text in notifications.</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Other Channels</h3>
          <div className="p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 space-y-6 bg-white dark:bg-zinc-900/50">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-zinc-400" />
                  <Label className="text-base font-bold">Email Notifications</Label>
                </div>
                <p className="text-xs text-zinc-500 font-medium">Get a daily digest of missed activity.</p>
              </div>
              <Switch className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
            </div>
            <div className="h-px bg-zinc-100 dark:border-zinc-800" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-zinc-400" />
                  <Label className="text-base font-bold">Sound Effects</Label>
                </div>
                <p className="text-xs text-zinc-500 font-medium">Play sounds for incoming messages.</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
