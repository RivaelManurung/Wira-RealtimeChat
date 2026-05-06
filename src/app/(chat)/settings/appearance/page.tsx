"use client"

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun, Trees } from "lucide-react";

export default function AppearanceSettings() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-1">Appearance</h2>
          <p className="text-sm text-zinc-500 font-medium">Customize how RealtimeChat looks on your device.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Interface Theme</h3>
          <RadioGroup 
            defaultValue={theme} 
            onValueChange={setTheme}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { id: "light", label: "Light", icon: Sun },
              { id: "dark", label: "Dark", icon: Moon },
              { id: "forest", label: "Forest", icon: Trees },
              { id: "system", label: "System", icon: Monitor },
            ].map((t) => (
              <Label
                key={t.id}
                htmlFor={t.id}
                className={`
                  flex flex-col items-center gap-4 p-6 rounded-3xl border-2 transition-all cursor-pointer
                  ${theme === t.id 
                    ? "border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-900" 
                    : "border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50"}
                `}
              >
                <RadioGroupItem value={t.id} id={t.id} className="sr-only" />
                <div className={`
                  h-12 w-12 rounded-2xl flex items-center justify-center transition-colors
                  ${theme === t.id ? "bg-zinc-900 text-white dark:bg-white dark:text-black" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"}
                `}>
                  <t.icon className="h-6 w-6" />
                </div>
                <span className="font-bold">{t.label}</span>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <div className="p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base font-bold">Reduced Motion</Label>
              <p className="text-xs text-zinc-500 font-medium">Minimize animations for a smoother experience.</p>
            </div>
            <Switch className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
          </div>
          <div className="h-px bg-zinc-100 dark:bg-zinc-800" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base font-bold">High Contrast</Label>
              <p className="text-xs text-zinc-500 font-medium">Increase contrast for better legibility.</p>
            </div>
            <Switch className="data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white" />
          </div>
        </div>
      </section>
    </div>
  );
}
