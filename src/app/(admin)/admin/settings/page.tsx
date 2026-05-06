"use client"

import { 
  Settings, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Lock,
  Cloud,
  Terminal,
  Database
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-1">System Settings</h1>
        <p className="text-zinc-500 font-medium italic">Manage global application configurations and maintenance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
            <CardHeader className="p-8">
              <div className="flex items-center gap-3 mb-2 text-zinc-900 dark:text-white">
                <Settings className="h-6 w-6" />
                <CardTitle>Core Configuration</CardTitle>
              </div>
              <CardDescription>Global flags for application behavior</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-6">
              <div className="flex items-center justify-between p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <div className="space-y-1">
                  <Label className="text-base font-bold">Maintenance Mode</Label>
                  <p className="text-xs text-zinc-500 font-medium italic">Disable all user access for emergency maintenance</p>
                </div>
                <Switch className="data-[state=checked]:bg-red-500" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <div className="space-y-1">
                  <Label className="text-base font-bold">New User Registration</Label>
                  <p className="text-xs text-zinc-500 font-medium italic">Allow new users to create accounts</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <div className="space-y-1">
                  <Label className="text-base font-bold">Public Group Creation</Label>
                  <p className="text-xs text-zinc-500 font-medium italic">Allow users to create public chat rooms</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
            <CardHeader className="p-8">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="h-6 w-6 text-blue-500" />
                <CardTitle>Security Policies</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-16 rounded-2xl border-zinc-100 dark:border-zinc-800 justify-start px-6 gap-4 font-bold">
                  <Lock className="h-5 w-5 text-zinc-400" /> API Access Keys
                </Button>
                <Button variant="outline" className="h-16 rounded-2xl border-zinc-100 dark:border-zinc-800 justify-start px-6 gap-4 font-bold">
                  <Terminal className="h-5 w-5 text-zinc-400" /> Webhook Config
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-[2.5rem] border-zinc-200 dark:border-zinc-800 shadow-sm p-6 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">System Health</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                  <div className="flex items-center gap-2"><Cloud className="h-3 w-3" /> API Server</div>
                  <Badge className="bg-green-500/10 text-green-600 border-none h-4 px-2 rounded-full text-[8px]">99.9%</Badge>
                </div>
                <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[99.9%] bg-green-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                  <div className="flex items-center gap-2"><Database className="h-3 w-3" /> Database</div>
                  <Badge className="bg-green-500/10 text-green-600 border-none h-4 px-2 rounded-full text-[8px]">OK</Badge>
                </div>
                <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-green-500" />
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button className="w-full rounded-2xl h-12 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 font-bold gap-2">
                <Activity className="h-4 w-4" /> Run System Diagnostic
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
