"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ArrowUpDown, CalendarDays, Eye, CheckCircle2, XCircle, MoreHorizontal } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

export type Report = {
  id: string
  target: string
  type: string
  reason: string
  reporter: string
  status: string
  date: string
}

const INITIAL_REPORTS: Report[] = [
  { id: "REP-9821", target: "John Doe", type: "User", reason: "Harassment", reporter: "Sarah W.", status: "pending", date: "6/5/2026" },
  { id: "REP-9822", target: "Designers Group", type: "Group", reason: "Spam", reporter: "Mike R.", status: "resolved", date: "6/5/2026" },
  { id: "REP-9823", target: "MSG-432", type: "Message", reason: "Inappropriate Content", reporter: "Elena S.", status: "pending", date: "5/5/2026" },
  { id: "REP-9824", target: "Louis Litt", type: "User", reason: "Hate Speech", reporter: "Rachel Z.", status: "resolved", date: "5/5/2026" },
  { id: "REP-9825", target: "General Room", type: "Group", reason: "Spam", reporter: "Harvey S.", status: "pending", date: "4/5/2026" },
  { id: "REP-9826", target: "MSG-512", type: "Message", reason: "Threat", reporter: "Donna P.", status: "rejected", date: "3/5/2026" },
  { id: "REP-9827", target: "Alex Rivai", type: "User", reason: "Impersonation", reporter: "Jessica P.", status: "resolved", date: "2/5/2026" },
  { id: "REP-9828", target: "Marketing Room", type: "Group", reason: "Off-topic Spam", reporter: "Mike R.", status: "pending", date: "1/5/2026" },
]

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>(INITIAL_REPORTS)
  const [search, setSearch] = useState("")
  const [resolveOpen, setResolveOpen] = useState(false)
  const [rejectOpen, setRejectOpen] = useState(false)
  const [selectedReport, setSelectedReport] = useState<Report | null>(null)

  const filtered = reports.filter(
    (r) =>
      r.target.toLowerCase().includes(search.toLowerCase()) ||
      r.reason.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase()),
  )

  const pending = reports.filter((r) => r.status === "pending").length
  const resolved = reports.filter((r) => r.status === "resolved").length

  function handleResolve() {
    if (!selectedReport) return
    setReports((prev) => prev.map((r) => (r.id === selectedReport.id ? { ...r, status: "resolved" } : r)))
    setResolveOpen(false)
    toast.success("Laporan diselesaikan", { description: `${selectedReport.id} telah ditandai resolved.` })
  }

  function handleReject() {
    if (!selectedReport) return
    setReports((prev) => prev.map((r) => (r.id === selectedReport.id ? { ...r, status: "rejected" } : r)))
    setRejectOpen(false)
    toast.success("Laporan ditolak", { description: `${selectedReport.id} telah ditandai rejected.` })
  }

  const reportColumns: ColumnDef<Report>[] = [
    {
      accessorKey: "id",
      header: () => (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          ID <ArrowUpDown className="h-3 w-3 opacity-50" />
        </div>
      ),
      cell: ({ row }) => <span className="font-semibold text-slate-700 text-sm">{row.getValue("id")}</span>,
    },
    {
      accessorKey: "target",
      header: () => (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          TARGET <ArrowUpDown className="h-3 w-3 opacity-50" />
        </div>
      ),
      cell: ({ row }) => <span className="text-sm font-medium text-slate-600">{row.getValue("target")}</span>,
    },
    {
      accessorKey: "type",
      header: () => (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          TIPE <ArrowUpDown className="h-3 w-3 opacity-50" />
        </div>
      ),
      cell: ({ row }) => (
        <Badge
          variant="secondary"
          className="bg-slate-100 text-slate-600 text-[10px] font-medium rounded px-2 py-0.5 border-none"
        >
          {row.getValue("type")}
        </Badge>
      ),
    },
    {
      accessorKey: "reason",
      header: () => <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">ALASAN</div>,
      cell: ({ row }) => <span className="text-sm text-muted-foreground">{row.getValue("reason")}</span>,
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
        let cls = "bg-amber-100 text-amber-700"
        if (status === "resolved") cls = "bg-emerald-100 text-emerald-700"
        if (status === "rejected") cls = "bg-red-100 text-red-700"
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
        const report = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/admin/reports/${report.id}`}>
                  <Eye className="mr-2 h-4 w-4" /> Lihat Detail
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {report.status === "pending" && (
                <>
                  <DropdownMenuItem
                    onClick={() => {
                      setSelectedReport(report)
                      setResolveOpen(true)
                    }}
                    className="text-emerald-600"
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4" /> Resolve
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSelectedReport(report)
                      setRejectOpen(true)
                    }}
                    className="text-red-500"
                  >
                    <XCircle className="mr-2 h-4 w-4" /> Reject
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              Total Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">{pending}</div>
          </CardContent>
        </Card>
        <Card className="border bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              Resolved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">{resolved}</div>
          </CardContent>
        </Card>
        <Card className="border bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              Avg Resolution Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">2.4h</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari laporan..."
              className="w-[280px] pl-9 bg-zinc-50 border-zinc-200 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <span className="text-sm text-muted-foreground font-medium">{filtered.length} laporan</span>
        </div>
      </div>
      <div className="border rounded-md bg-white overflow-hidden shadow-sm">
        <DataTable columns={reportColumns} data={filtered} />
      </div>

      <AlertDialog open={resolveOpen} onOpenChange={setResolveOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Resolve Laporan?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda yakin ingin menandai laporan <span className="font-semibold">{selectedReport?.id}</span> sebagai
              resolved?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={handleResolve}>
              Ya, Resolve
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={rejectOpen} onOpenChange={setRejectOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject Laporan?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda yakin ingin menolak laporan <span className="font-semibold">{selectedReport?.id}</span>? Laporan akan
              ditandai sebagai rejected.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={handleReject}>
              Ya, Reject
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
