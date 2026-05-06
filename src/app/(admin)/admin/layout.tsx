"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  ShieldAlert, 
  BarChart3, 
  Settings, 
  UserCog,
  LogOut,
  Bell,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin" },
  { icon: Users, label: "User Management", href: "/admin/users" },
  { icon: MessageSquare, label: "Message Management", href: "/admin/messages" },
  { icon: Users, label: "Group Management", href: "/admin/groups" },
  { icon: ShieldAlert, label: "Moderation", href: "/admin/reports", badge: 5 },
  { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
  { icon: Settings, label: "System Settings", href: "/admin/settings" },
  { icon: UserCog, label: "Admin Management", href: "/admin/admins" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Admin Sidebar */}
      <aside 
        className={`
          ${isSidebarOpen ? "w-64" : "w-20"} 
          transition-all duration-300 ease-in-out border-r border-zinc-200 dark:border-zinc-800 
          bg-white dark:bg-zinc-950 flex flex-col h-full z-30
        `}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className={`flex items-center gap-2 ${!isSidebarOpen && "hidden"}`}>
            <ShieldAlert className="h-6 w-6 text-red-500" />
            <span className="font-bold text-lg tracking-tight">AdminPanel</span>
          </div>
          {!isSidebarOpen && <ShieldAlert className="h-6 w-6 text-red-500 mx-auto" />}
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!isSidebarOpen)} className="rounded-full">
            {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <nav className="p-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`
                  flex items-center gap-3 p-3 rounded-xl transition-all
                  ${pathname === item.href 
                    ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950" 
                    : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"}
                `}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {isSidebarOpen && (
                  <div className="flex items-center justify-between flex-1">
                    <span className="text-sm font-medium">{item.label}</span>
                    {item.badge && (
                      <Badge variant="destructive" className="h-5 min-w-[20px] rounded-full flex items-center justify-center p-0 text-[10px]">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && "justify-center"}`}>
            <Avatar className="h-9 w-9">
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            {isSidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">Super Admin</p>
                <p className="text-[10px] text-zinc-500">admin@app.com</p>
              </div>
            )}
            {isSidebarOpen && (
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-red-500">
                <LogOut className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Admin Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-between px-6 z-20">
          <h2 className="text-lg font-semibold tracking-tight capitalize">
            {pathname.split("/").pop() || "Overview"}
          </h2>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white dark:border-zinc-950" />
            </Button>
            <div className="h-8 w-px bg-zinc-200 dark:border-zinc-800 mx-2" />
            <Button asChild variant="ghost" size="sm" className="text-zinc-500">
              <Link href="/chat">Exit Admin</Link>
            </Button>
          </div>
        </header>
        <ScrollArea className="flex-1">
          <div className="p-6">
            {children}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
