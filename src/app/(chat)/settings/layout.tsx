"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  User, 
  Bell, 
  Lock, 
  Palette, 
  Globe, 
  ShieldCheck, 
  Users, 
  Trash2,
  ChevronRight
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const SETTINGS_MENU = [
  { icon: User, label: "Profile & Account", href: "/settings/profile" },
  { icon: Bell, label: "Notifications", href: "/settings/notifications" },
  { icon: Lock, label: "Privacy", href: "/settings/privacy" },
  { icon: Palette, label: "Appearance", href: "/settings/appearance" },
  { icon: Globe, label: "Language", href: "/settings/language" },
  { icon: ShieldCheck, label: "Security", href: "/settings/security" },
  { icon: Users, label: "Blocked Users", href: "/settings/blocked" },
  { icon: Trash2, label: "Delete Account", href: "/settings/danger", variant: "destructive" },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-full bg-white dark:bg-black overflow-hidden font-sans">
      {/* Settings Sidebar */}
      <aside className="w-80 border-r border-zinc-100 dark:border-zinc-800 flex flex-col shrink-0">
        <div className="p-8 pb-4">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Settings</h1>
          <p className="text-sm text-zinc-500 font-medium">Manage your experience</p>
        </div>
        <ScrollArea className="flex-1 px-4">
          <nav className="space-y-1 py-4">
            {SETTINGS_MENU.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`
                  flex items-center justify-between p-3 rounded-2xl transition-all duration-300 group
                  ${pathname === item.href 
                    ? "bg-zinc-100 dark:bg-zinc-800" 
                    : "hover:bg-zinc-50 dark:hover:bg-zinc-900/50"}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    h-10 w-10 rounded-xl flex items-center justify-center transition-colors
                    ${pathname === item.href 
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-black" 
                      : "bg-zinc-50 dark:bg-zinc-900 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white"}
                    ${item.variant === "destructive" ? "text-red-500 bg-red-50 dark:bg-red-900/20" : ""}
                  `}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-sm font-bold ${item.variant === "destructive" ? "text-red-500" : ""}`}>
                    {item.label}
                  </span>
                </div>
                <ChevronRight className={`h-4 w-4 transition-all ${pathname === item.href ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`} />
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      {/* Settings Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
