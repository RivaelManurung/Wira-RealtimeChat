"use client"

import { Globe, Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const LANGUAGES = [
  { id: "en", label: "English", sub: "United States" },
  { id: "id", label: "Bahasa Indonesia", sub: "Indonesia" },
  { id: "jp", label: "日本語", sub: "Japanese" },
  { id: "kr", label: "한국어", sub: "Korean" },
];

export default function LanguageSettings() {
  const [lang, setLang] = useState("en");

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-1">Language</h2>
          <p className="text-sm text-zinc-500 font-medium italic">Choose your preferred language for the interface.</p>
        </div>

        <RadioGroup value={lang} onValueChange={setLang} className="space-y-2">
          {LANGUAGES.map((item) => (
            <Label
              key={item.id}
              htmlFor={item.id}
              className={`
                flex items-center justify-between p-5 rounded-3xl border-2 transition-all cursor-pointer
                ${lang === item.id 
                  ? "border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-900/50" 
                  : "border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50"}
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`
                  h-10 w-10 rounded-xl flex items-center justify-center transition-colors
                  ${lang === item.id ? "bg-zinc-900 text-white dark:bg-white dark:text-black" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400"}
                `}>
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-bold">{item.label}</p>
                  <p className="text-xs text-zinc-500 font-medium">{item.sub}</p>
                </div>
              </div>
              <RadioGroupItem value={item.id} id={item.id} className="sr-only" />
              {lang === item.id && (
                <div className="h-6 w-6 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center">
                  <Check className="h-4 w-4 text-white dark:text-black" />
                </div>
              )}
            </Label>
          ))}
        </RadioGroup>
      </section>
    </div>
  );
}
