"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search, Plus, ArrowUpDown, CalendarDays, ShieldCheck, Shield,
  ShieldAlert, MoreHorizontal, Pencil, Trash2, Eye
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export type Admin = {
  id: string
  name: string
  email: string
  role: string
  status: string
  lastLogin: string
}

const INITIAL_ADMINS: Admin[] = [
  { id: "1", name: "Super Admin", email: "admin@chatin.com", role: "Owner", status: "Active", lastLogin: "6/5/2026" },
  { id: "2", name: "Sarah Wilson", email: "sarah@chatin.com", role: "Moderator", status: "Active", lastLogin: "6/5/2026" },
  { id: "3", name: "John Doe", email: "john@chatin.com", role: "Moderator", status: "Active", lastLogin: "5/5/2026" },
  { id: "4", name: "Harvey Specter", email: "harvey@chatin.com", role: "Editor", status: "Inactive", lastLogin: "1/5/2026" },
  { id: "5", name: "Jessica Pearson", email: "jessica@chatin.com", role: "Owner", status: "Active", lastLogin: "6/5/2026" },
]

export default function AdminManagementPage() {
  const [admins, setAdmins] = useState<Admin[]>(INITIAL_ADMINS)
  const [search, setSearch] = useState("")
  const [revokeOpen, setRevokeOpen] = useState(false)
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null)

  const filtered = admins.filter(
    (a) => a.name.toLowerCase().includes(search.toLowerCase()) || a.email.toLowerCase().includes(search.toLowerCase()),
  )

  function handleRevoke() {
    if (!selectedAdmin) return
    setAdmins((prev) => prev.filter((a) => a.id !== selectedAdmin.id))
    setRevokeOpen(false)
    toast.success("Akses dicabut", { description: `${selectedAdmin.name} telah dihapus dari daftar admin.` })
  }

  const adminColumns: ColumnDef<Admin>[] = [
    {
      accessorKey: "name",
      header: () => (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          ADMIN <ArrowUpDown className="h-3 w-3 opacity-50" />
        </div>
      ),
      cell: ({ row }) => {
        const name = row.getValue("name") as string
        return (
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-slate-800 text-white font-semibold text-xs">{name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-700 text-sm">{name}</span>
              <span className="text-xs text-muted-foreground">{row.original.email}</span>
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: "role",
      header: () => (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          PERAN <ArrowUpDown className="h-3 w-3 opacity-50" />
        </div>
      ),
      cell: ({ row }) => {
        const role = row.getValue("role") as string
        return (
          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
            {role === "Owner" && <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />}
            {role === "Moderator" && <Shield className="h-3.5 w-3.5 text-indigo-500" />}
            {role === "Editor" && <Shield className="h-3.5 w-3.5 text-slate-400" />}
            {role}
          </div>
        )
      },
    },
    {
      accessorKey: "status",
      header: () => (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          STATUS <ArrowUpDown className="h-3 w-3 opacity-50" />
        </div>
      ),
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <Badge
            variant="secondary"
            className={`${
              status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
            } rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide border-none`}
          >
            {status === "Active" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 inline-block" />}
            {status}
          </Badge>
        )
      },
    },
    {
      accessorKey: "lastLogin",
      header: () => (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          LOGIN TERAKHIR <ArrowUpDown className="h-3 w-3 opacity-50" />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <CalendarDays className="h-4 w-4 opacity-50" />
          <span>{row.getValue("lastLogin")}</span>
        </div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const admin = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/admin/admins/${admin.id}`}>
                  <Eye className="mr-2 h-4 w-4" /> Lihat Detail
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/admin/admins/${admin.id}/edit`}>
                  <Pencil className="mr-2 h-4 w-4" /> Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  setSelectedAdmin(admin)
                  setRevokeOpen(true)
                }}
                className="text-red-500"
              >
                <ShieldAlert className="mr-2 h-4 w-4" /> Revoke Access
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari admin..."
              className="w-[280px] pl-9 bg-zinc-50 border-zinc-200 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <span className="text-sm text-muted-foreground font-medium">{filtered.length} admin</span>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md text-sm px-4" asChild>
          <Link href="/admin/admins/create">
            <Plus className="mr-2 h-4 w-4" /> Invite Admin
          </Link>
        </Button>
      </div>
      <div className="border rounded-md bg-white overflow-hidden shadow-sm">
        <DataTable columns={adminColumns} data={filtered} />
      </div>

      <AlertDialog open={revokeOpen} onOpenChange={setRevokeOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cabut Akses Admin?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda yakin ingin mencabut akses admin <span className="font-semibold">{selectedAdmin?.name}</span>? Mereka
              tidak akan bisa mengakses panel admin lagi.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={handleRevoke}>
              Cabut Akses
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
