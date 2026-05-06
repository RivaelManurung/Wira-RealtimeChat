"use client"

import { useState } from "react";
import Link from "next/link";
import {
  Search, Plus, ArrowUpDown, CalendarDays,
  User as UserIcon, ShieldAlert, Shield,
  MoreHorizontal, Pencil, Trash2, Eye, Ban
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle
} from "@/components/ui/alert-dialog";

export type User = {
  id: string; name: string; email: string; status: string; role: string; joined: string;
}

const INITIAL_USERS: User[] = [
  { id: "1", name: "Sarah Wilson", email: "sarah@example.com", status: "Online", role: "User", joined: "16/4/2026" },
  { id: "2", name: "Mike Ross", email: "mike.ross@gmail.com", status: "Offline", role: "Moderator", joined: "15/4/2026" },
  { id: "3", name: "Elena Gilbert", email: "elena@vamp.com", status: "Online", role: "User", joined: "14/4/2026" },
  { id: "4", name: "Harvey Specter", email: "harvey@suits.com", status: "Offline", role: "Admin", joined: "13/4/2026" },
  { id: "5", name: "Donna Paulsen", email: "donna@suits.com", status: "Online", role: "User", joined: "11/4/2026" },
  { id: "6", name: "Louis Litt", email: "louis@suits.com", status: "Banned", role: "User", joined: "9/4/2026" },
  { id: "7", name: "Rachel Zane", email: "rachel@suits.com", status: "Online", role: "User", joined: "6/4/2026" },
  { id: "8", name: "Jessica Pearson", email: "jessica@suits.com", status: "Offline", role: "Admin", joined: "2/4/2026" },
];

export default function UsersAdminPage() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [search, setSearch] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete() {
    if (!selectedUser) return;
    setUsers(prev => prev.filter(u => u.id !== selectedUser.id));
    setDeleteOpen(false);
    toast.success("Pengguna berhasil dihapus", { description: `${selectedUser.name} telah dihapus dari sistem.` });
  }

  function handleBan(user: User) {
    setUsers(prev => prev.map(u => u.id === user.id ? { ...u, status: u.status === "Banned" ? "Offline" : "Banned" } : u));
    toast.success(user.status === "Banned" ? "Pengguna di-unban" : "Pengguna di-ban", {
      description: `${user.name} telah ${user.status === "Banned" ? "di-unban" : "di-ban"}.`
    });
  }

  const userColumns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: () => <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">PENGGUNA <ArrowUpDown className="h-3 w-3 opacity-50" /></div>,
      cell: ({ row }) => {
        const name = row.getValue("name") as string;
        return (
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8"><AvatarFallback className="bg-indigo-100 text-indigo-700 font-semibold text-xs">{name[0]}</AvatarFallback></Avatar>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-700 text-sm">{name}</span>
              <span className="text-xs text-muted-foreground">{row.original.email}</span>
            </div>
          </div>
        );
      }
    },
    {
      accessorKey: "status",
      header: () => <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">STATUS <ArrowUpDown className="h-3 w-3 opacity-50" /></div>,
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        let cls = "bg-slate-100 text-slate-600";
        if (status === "Online") cls = "bg-emerald-100 text-emerald-700";
        if (status === "Banned") cls = "bg-red-100 text-red-700";
        return (
          <Badge variant="secondary" className={`${cls} rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide border-none`}>
            {status === "Online" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 inline-block" />}
            {status === "Offline" && <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5 inline-block" />}
            {status}
          </Badge>
        );
      }
    },
    {
      accessorKey: "role",
      header: () => <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">PERAN <ArrowUpDown className="h-3 w-3 opacity-50" /></div>,
      cell: ({ row }) => {
        const role = row.getValue("role") as string;
        return (
          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
            {role === "Admin" && <ShieldAlert className="h-3.5 w-3.5 text-rose-500" />}
            {role === "Moderator" && <Shield className="h-3.5 w-3.5 text-indigo-500" />}
            {role === "User" && <UserIcon className="h-3.5 w-3.5 text-slate-400" />}
            {role}
          </div>
        );
      }
    },
    {
      accessorKey: "joined",
      header: () => <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">TANGGAL GABUNG <ArrowUpDown className="h-3 w-3 opacity-50" /></div>,
      cell: ({ row }) => (
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <CalendarDays className="h-4 w-4 opacity-50" /><span>{row.getValue("joined")}</span>
        </div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const user = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild><Link href={`/admin/users/${user.id}`}><Eye className="mr-2 h-4 w-4" /> Lihat Detail</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href={`/admin/users/${user.id}/edit`}><Pencil className="mr-2 h-4 w-4" /> Edit</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleBan(user)} className="text-amber-600"><Ban className="mr-2 h-4 w-4" /> {user.status === "Banned" ? "Unban" : "Ban"}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => { setSelectedUser(user); setDeleteOpen(true); }} className="text-red-500"><Trash2 className="mr-2 h-4 w-4" /> Hapus</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Cari nama atau email..." className="w-[280px] pl-9 bg-zinc-50 border-zinc-200 text-sm" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <span className="text-sm text-muted-foreground font-medium">{filtered.length} pengguna</span>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md text-sm px-4" asChild>
          <Link href="/admin/users/create"><Plus className="mr-2 h-4 w-4" /> Tambah Pengguna</Link>
        </Button>
      </div>

      <div className="border rounded-md bg-white overflow-hidden shadow-sm">
        <DataTable columns={userColumns} data={filtered} />
      </div>

      {/* Delete Confirmation - AlertDialog is acceptable for destructive confirms */}
      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Pengguna?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda yakin ingin menghapus <span className="font-semibold">{selectedUser?.name}</span>? Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={handleDelete}>Hapus Permanen</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
