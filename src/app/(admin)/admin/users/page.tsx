"use client"

import { 
  MoreHorizontal, 
  Search, 
  UserPlus, 
  Download,
  Filter,
  ShieldBan,
  Mail
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const USERS = [
  { id: "1", name: "Sarah Wilson", email: "sarah@example.com", status: "active", joined: "2026-01-12" },
  { id: "2", name: "Mike Ross", email: "mike@ross.com", status: "banned", joined: "2026-02-05" },
  { id: "3", name: "Elena Gilbert", email: "elena@vamp.com", status: "active", joined: "2026-03-20" },
  { id: "4", name: "Harvey Specter", email: "harvey@suits.com", status: "active", joined: "2026-04-01" },
];

export default function UsersAdminPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <Input placeholder="Search users by name or email..." className="pl-9 h-10" />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="h-10">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
          <Button variant="outline" size="sm" className="h-10">
            <Download className="h-4 w-4 mr-2" /> Export CSV
          </Button>
          <Button size="sm" className="h-10 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950">
            <UserPlus className="h-4 w-4 mr-2" /> Invite User
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent bg-zinc-50 dark:bg-zinc-900/50">
              <TableHead className="w-[300px]">User</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {USERS.map((user) => (
              <TableRow key={user.id} className="group transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold truncate">{user.name}</span>
                      <span className="text-[11px] text-zinc-500 truncate">{user.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={user.status === "active" ? "secondary" : "destructive"}
                    className="capitalize text-[10px] h-5 rounded-full px-2"
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-zinc-500">
                  {user.joined}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Mail className="h-4 w-4" /> Message
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500 flex items-center gap-2">
                        <ShieldBan className="h-4 w-4" /> Ban User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
