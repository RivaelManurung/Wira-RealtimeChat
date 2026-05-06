"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ArrowUpDown, CalendarDays, Eye, Trash2, ShieldAlert, MoreHorizontal, MessageSquare } from "lucide-react"
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

export type Message = {
  id: string
  sender: string
  room: string
  content: string
  status: string
  date: string
}

const INITIAL_MESSAGES: Message[] = [
  { id: "M-901", sender: "Alex Rivai", room: "Designers", content: "Check the new Geist font guys!", status: "safe", date: "6/5/2026" },
  { id: "M-902", sender: "John Doe", room: "DM: Sarah", content: "Hey, are you free today?", status: "flagged", date: "6/5/2026" },
  { id: "M-903", sender: "Elena S.", room: "Marketing", content: "Buy cheap crypto now at this link...", status: "deleted", date: "5/5/2026" },
  { id: "M-904", sender: "Harvey S.", room: "General", content: "Welcome to the team everyone!", status: "safe", date: "5/5/2026" },
  { id: "M-905", sender: "Donna P.", room: "DM: Mike", content: "Please review the document I sent", status: "safe", date: "4/5/2026" },
  { id: "M-906", sender: "Louis L.", room: "General", content: "This is completely unacceptable behavior", status: "flagged", date: "4/5/2026" },
  { id: "M-907", sender: "Rachel Z.", room: "Legal", content: "Contract draft is ready for review", status: "safe", date: "3/5/2026" },
  { id: "M-908", sender: "Jessica P.", room: "Announcements", content: "Server maintenance tonight at 11pm", status: "safe", date: "2/5/2026" },
]

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [search, setSearch] = useState("")
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [selectedMsg, setSelectedMsg] = useState<Message | null>(null)

  const filtered = messages.filter(
    (m) =>
      m.sender.toLowerCase().includes(search.toLowerCase()) ||
      m.content.toLowerCase().includes(search.toLowerCase()) ||
      m.room.toLowerCase().includes(search.toLowerCase()),
  )

  function handleFlag(msg: Message) {
    setMessages((prev) =>
      prev.map((m) => (m.id === msg.id ? { ...m, status: m.status === "flagged" ? "safe" : "flagged" } : m)),
    )
    toast.success(msg.status === "flagged" ? "Flag dihapus" : "Pesan di-flag", {
      description: `Pesan dari ${msg.sender} telah ${msg.status === "flagged" ? "di-unflag" : "di-flag"}.`,
    })
  }

  function handleDelete() {
    if (!selectedMsg) return
    setMessages((prev) => prev.filter((m) => m.id !== selectedMsg.id))
    setDeleteOpen(false)
    toast.success("Pesan dihapus", {
      description: `Pesan ${selectedMsg.id} dari ${selectedMsg.sender} telah dihapus permanen.`,
    })
  }

  function handleMarkDeleted(msg: Message) {
    setMessages((prev) => prev.map((m) => (m.id === msg.id ? { ...m, status: "deleted" } : m)))
    toast.success("Pesan ditandai dihapus", { description: `Pesan dari ${msg.sender} ditandai sebagai dihapus.` })
  }

  const messageColumns: ColumnDef<Message>[] = [
    {
      accessorKey: "sender",
      header: () => (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          PENGIRIM <ArrowUpDown className="h-3 w-3 opacity-50" />
        </div>
      ),
      cell: ({ row }) => {
        const sender = row.getValue("sender") as string
        return (
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-slate-100 text-slate-600 font-semibold text-xs">{sender[0]}</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-slate-700 text-sm">{sender}</span>
          </div>
        )
      },
    },
    {
      accessorKey: "room",
      header: () => (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          ROOM <ArrowUpDown className="h-3 w-3 opacity-50" />
        </div>
      ),
      cell: ({ row }) => (
        <Badge
          variant="secondary"
          className="bg-slate-100 text-slate-600 text-[10px] font-medium rounded px-2 py-0.5 border-none"
        >
          {row.getValue("room")}
        </Badge>
      ),
    },
    {
      accessorKey: "content",
      header: () => <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">ISI PESAN</div>,
      cell: ({ row }) => <p className="text-sm text-muted-foreground truncate max-w-[280px]">{row.getValue("content")}</p>,
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
        let cls = "bg-emerald-100 text-emerald-700"
        if (status === "flagged") cls = "bg-amber-100 text-amber-700"
        if (status === "deleted") cls = "bg-red-100 text-red-700"
        return (
          <Badge
            variant="secondary"
            className={`${cls} rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide border-none uppercase`}
          >
            {status}
          </Badge>
        )
      },
    },
    {
      accessorKey: "date",
      header: () => (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          TANGGAL <ArrowUpDown className="h-3 w-3 opacity-50" />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <CalendarDays className="h-4 w-4 opacity-50" />
          <span>{row.getValue("date")}</span>
        </div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const msg = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/admin/messages/${msg.id}`}>
                  <Eye className="mr-2 h-4 w-4" /> Lihat Detail
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleFlag(msg)} className="text-amber-600">
                <ShieldAlert className="mr-2 h-4 w-4" /> {msg.status === "flagged" ? "Unflag" : "Flag"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleMarkDeleted(msg)} className="text-orange-500">
                <MessageSquare className="mr-2 h-4 w-4" /> Tandai Dihapus
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelectedMsg(msg)
                  setDeleteOpen(true)
                }}
                className="text-red-500"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Hapus Permanen
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
              placeholder="Cari pesan, pengirim, atau room..."
              className="w-[300px] pl-9 bg-zinc-50 border-zinc-200 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <span className="text-sm text-muted-foreground font-medium">{filtered.length} pesan</span>
        </div>
      </div>

      <div className="border rounded-md bg-white overflow-hidden shadow-sm">
        <DataTable columns={messageColumns} data={filtered} />
      </div>

      {/* Delete Confirmation */}
      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Pesan?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda yakin ingin menghapus pesan <span className="font-semibold">{selectedMsg?.id}</span> dari{" "}
              <span className="font-semibold">{selectedMsg?.sender}</span>? Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={handleDelete}>
              Hapus Permanen
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
