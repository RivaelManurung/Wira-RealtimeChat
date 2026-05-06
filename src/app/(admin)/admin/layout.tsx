"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare,
  BarChart3,
  Flag,
  Settings, 
  LogOut,
  ChevronRight,
  Sun,
  ShieldCheck,
  MessageCircleHeart
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarFooter,
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Toaster } from "@/components/ui/sonner"

const NAV_ITEMS = [
  { 
    label: "MAIN", 
    items: [
      { icon: LayoutDashboard, label: "Overview", href: "/admin" },
      { icon: Users, label: "Users", href: "/admin/users" },
      { icon: MessageSquare, label: "Messages", href: "/admin/messages" },
    ]
  },
  {
    label: "MONITORING",
    items: [
      { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
      { icon: Flag, label: "Reports", href: "/admin/reports" },
    ]
  },
  {
    label: "SYSTEM",
    items: [
      { icon: ShieldCheck, label: "Admins", href: "/admin/admins" },
      { icon: Settings, label: "Settings", href: "/admin/settings" },
    ]
  }
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Find current active label for header
  let activePageTitle = "Overview"
  NAV_ITEMS.forEach(group => {
    group.items.forEach(item => {
      if (pathname.includes(item.href) && item.href !== "/admin") {
        activePageTitle = item.label
      } else if (pathname === "/admin" && item.href === "/admin") {
        activePageTitle = "Overview"
      }
    })
  })

  return (
    <SidebarProvider
      style={{
        "--sidebar": "#0f172a", 
        "--sidebar-foreground": "#f8fafc",
        "--sidebar-border": "#1e293b",
        "--sidebar-primary": "#f8fafc",
        "--sidebar-primary-foreground": "#0f172a",
        "--sidebar-accent": "#1e293b",
        "--sidebar-accent-foreground": "#f8fafc",
        "--sidebar-ring": "#cbd5e1",
      } as React.CSSProperties}
    >
      <Sidebar className="border-r-0">
        <SidebarHeader className="border-b border-[#1e293b] p-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-500 text-white rounded p-1.5 font-bold text-[10px] w-8 h-8 flex items-center justify-center">
              <MessageCircleHeart className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white leading-none tracking-wide text-sm">Chatin</span>
              <span className="text-[10px] text-slate-400 mt-1">Admin Workspace</span>
            </div>
          </div>
        </SidebarHeader>

        <div className="p-4 border-b border-[#1e293b]">
          <p className="text-[10px] text-slate-400 font-semibold mb-1 uppercase tracking-wider">WORKSPACE</p>
          <p className="text-xs text-white font-medium">realtime_chat_prod</p>
        </div>

        <SidebarContent className="pt-4">
          {NAV_ITEMS.map((group) => (
            <SidebarGroup key={group.label} className="pt-0 pb-6">
              <SidebarGroupLabel className="text-[10px] text-slate-500 font-bold tracking-wider px-4 mb-2">
                {group.label}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
                    return (
                      <SidebarMenuItem key={item.label} className="px-2">
                        <SidebarMenuButton 
                          asChild 
                          isActive={isActive}
                          className={`
                            h-10 text-xs font-medium transition-all rounded-md
                            ${isActive 
                              ? "bg-[#1e293b] text-white hover:bg-[#1e293b] hover:text-white" 
                              : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}
                          `}
                        >
                          <Link href={item.href} className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                              <item.icon className="h-4 w-4" />
                              <span>{item.label}</span>
                            </div>
                            {isActive && <ChevronRight className="h-4 w-4 opacity-50" />}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter className="border-t border-[#1e293b] p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 bg-black">
                <AvatarFallback className="bg-black text-white text-xs font-semibold">A</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Admin Bypass</span>
                <span className="text-[10px] text-slate-400">admin_superadmin</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-[#1e293b] mt-2 h-8 text-xs px-2">
            <LogOut className="h-3 w-3 mr-2" /> Keluar
          </Button>
        </SidebarFooter>
      </Sidebar>
      
      <SidebarInset className="bg-[#f8fafc]">
        {/* Top Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-6">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-2" />
            <div className="h-4 w-[1px] bg-slate-200" />
            <h1 className="text-sm font-bold text-slate-800">{activePageTitle}</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="h-8 px-2 text-xs font-medium text-slate-600">
              EN
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
              <Sun className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2 ml-2">
              <span className="text-xs font-medium text-slate-600">admin_bypass</span>
              <Avatar className="h-7 w-7 bg-blue-100">
                <AvatarFallback className="bg-blue-100 text-blue-700 text-[10px] font-bold">A</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
        <Toaster richColors position="top-right" />
      </SidebarInset>
    </SidebarProvider>
  )
}
