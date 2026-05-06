"use client"

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Lock, Eye, MessageSquare, Globe } from "lucide-react";

export default function PrivacySettings() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-1">Privacy</h2>
          <p className="text-sm text-zinc-500 font-medium italic">Control who can see you and interact with you.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Visibility</h3>
          <div className="p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 space-y-6 bg-white dark:bg-zinc-900/50">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-zinc-400" />
                  <Label className="text-base font-bold">Online Status</Label>
                </div>
                <p className="text-xs text-zinc-500 font-medium">Show when you are active to your friends.</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
            </div>
            <div className="h-px bg-zinc-100 dark:border-zinc-800" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-zinc-400" />
                  <Label className="text-base font-bold">Read Receipts</Label>
                </div>
                <p className="text-xs text-zinc-500 font-medium">If turned off, you won't send or receive read receipts.</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Interactions</h3>
          <div className="p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 space-y-6 bg-white dark:bg-zinc-900/50">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-zinc-400" />
                  <Label className="text-base font-bold">Direct Messages</Label>
                </div>
                <p className="text-xs text-zinc-500 font-medium">Allow everyone to send you direct messages.</p>
              </div>
              <Switch className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
            </div>
            <div className="h-px bg-zinc-100 dark:border-zinc-800" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-zinc-400" />
                  <Label className="text-base font-bold">Group Invites</Label>
                </div>
                <p className="text-xs text-zinc-500 font-medium">Only friends can invite you to groups.</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
