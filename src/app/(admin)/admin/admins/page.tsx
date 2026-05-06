"use client"

import { 
  Plus, 
  Search, 
  ShieldCheck, 
  MoreHorizontal,
  Mail,
  UserCheck,
  ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const ADMINS = [
  { id: "1", name: "Super Admin", email: "admin@chat.com", role: "Owner", status: "Active" },
  { id: "2", name: "Sarah Wilson", email: "sarah@chat.com", role: "Moderator", status: "Active" },
  { id: "3", name: "John Doe", email: "john@chat.com", role: "Editor", status: "Inactive" },
];

export default function AdminManagementPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-1">Admin Management</h1>
          <p className="text-zinc-500 font-medium italic">Manage team members and their access levels</p>
        </div>
        <Button className="rounded-full h-12 px-8 bg-zinc-900 text-white dark:bg-white dark:text-black font-bold gap-2">
          <Plus className="h-5 w-5" /> Invite Admin
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
        <Input 
          placeholder="Search administrators by name or email..." 
          className="h-14 pl-12 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ADMINS.map((admin) => (
          <div 
            key={admin.id} 
            className="p-6 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm space-y-6 group hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
          >
            <div className="flex justify-between items-start">
              <Avatar className="h-16 w-16 rounded-2xl border-2 border-zinc-50 dark:border-zinc-800">
                <AvatarFallback className="font-black text-lg">{admin.name[0]}</AvatarFallback>
              </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-2xl p-2 w-48">
                  <DropdownMenuItem className="rounded-xl gap-3 p-3">
                    <UserCheck className="h-4 w-4" /> Edit Permissions
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-xl gap-3 p-3 text-red-500">
                    <ShieldAlert className="h-4 w-4" /> Revoke Access
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-1">
              <h3 className="font-black text-xl tracking-tight">{admin.name}</h3>
              <div className="flex items-center gap-2 text-zinc-500 font-medium text-xs">
                <Mail className="h-3 w-3" /> {admin.email}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-50 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{admin.role}</span>
              </div>
              <Badge className={`
                rounded-full px-3 h-6 font-black uppercase text-[9px] border-none
                ${admin.status === 'Active' ? 'bg-green-500/10 text-green-600' : 'bg-zinc-100 text-zinc-400'}
              `}>
                {admin.status}
              </Badge>
            </div>
          </div>
        ))}

        <button className="p-6 rounded-[2.5rem] border-2 border-dashed border-zinc-100 dark:border-zinc-800 flex flex-col items-center justify-center space-y-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group min-h-[250px]">
          <div className="h-16 w-16 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-300 group-hover:text-blue-500 group-hover:bg-blue-50 transition-all">
            <Plus className="h-8 w-8" />
          </div>
          <p className="text-sm font-bold text-zinc-400 group-hover:text-zinc-600">Add New Team Member</p>
        </button>
      </div>
    </div>
  );
}
