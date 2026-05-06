"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, XCircle, CalendarDays, User as UserIcon, ShieldAlert, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const REPORTS = [
  { id: "REP-9821", target: "John Doe", type: "User", reason: "Harassment", reporter: "Sarah W.", status: "pending", date: "6/5/2026" },
  { id: "REP-9822", target: "Designers Group", type: "Group", reason: "Spam", reporter: "Mike R.", status: "resolved", date: "6/5/2026" },
  { id: "REP-9823", target: "MSG-432", type: "Message", reason: "Inappropriate Content", reporter: "Elena S.", status: "pending", date: "5/5/2026" },
  { id: "REP-9824", target: "Louis Litt", type: "User", reason: "Hate Speech", reporter: "Rachel Z.", status: "resolved", date: "5/5/2026" },
  { id: "REP-9825", target: "General Room", type: "Group", reason: "Spam", reporter: "Harvey S.", status: "pending", date: "4/5/2026" },
  { id: "REP-9826", target: "MSG-512", type: "Message", reason: "Threat", reporter: "Donna P.", status: "rejected", date: "3/5/2026" },
  { id: "REP-9827", target: "Alex Rivai", type: "User", reason: "Impersonation", reporter: "Jessica P.", status: "resolved", date: "2/5/2026" },
  { id: "REP-9828", target: "Marketing Room", type: "Group", reason: "Off-topic Spam", reporter: "Mike R.", status: "pending", date: "1/5/2026" },
]

export default function ReportDetailPage({ params }: { params: Promise<{ reportId: string }> }) {
  const { reportId } = use(params)
  const report = REPORTS.find((r) => r.id === reportId)

  if (!report) {
    return (
      <div className="flex-1 p-8 pt-6">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-slate-800">Report Not Found</h2>
          <Button variant="ghost" className="mt-4" asChild>
            <Link href="/admin/reports">Back to Reports</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 p-8 pt-6 max-w-4xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" asChild>
          <Link href="/admin/reports">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Reports
          </Link>
        </Button>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-rose-50 rounded-lg flex items-center justify-center border border-rose-100">
              <Flag className="h-6 w-6 text-rose-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{report.id}</h1>
              <p className="text-muted-foreground font-medium">Laporan oleh {report.reporter}</p>
            </div>
          </div>
          {report.status === "pending" && (
            <div className="flex gap-2">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <CheckCircle2 className="mr-2 h-4 w-4" /> Resolve
              </Button>
              <Button variant="destructive">
                <XCircle className="mr-2 h-4 w-4" /> Reject
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 border bg-white shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50/50 border-b">
            <CardTitle className="text-sm font-semibold text-slate-700">Laporan Detail</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Target</span>
                <span className="col-span-2 text-sm font-semibold text-slate-700">{report.target}</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Tipe Target</span>
                <div className="col-span-2">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-[10px] border-none">
                    {report.type}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Status</span>
                <div className="col-span-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      report.status === "resolved"
                        ? "bg-emerald-100 text-emerald-700"
                        : report.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                    } rounded-full text-[10px] font-bold border-none uppercase`}
                  >
                    {report.status}
                  </Badge>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <span className="text-sm font-medium text-slate-500 block">Alasan Laporan</span>
                <div className="text-sm text-slate-700 bg-slate-50 p-4 rounded-md border italic">
                  "{report.reason}"
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border bg-white shadow-sm overflow-hidden h-fit">
            <CardHeader className="bg-slate-50/50 border-b">
              <CardTitle className="text-sm font-semibold text-slate-700">Metadata</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-1">
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Pelapor</p>
                <p className="text-sm font-medium text-slate-700">{report.reporter}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Tanggal</p>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CalendarDays className="h-4 w-4 text-slate-400" />
                  {report.date}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border bg-white shadow-sm overflow-hidden h-fit">
            <CardHeader className="bg-slate-50/50 border-b">
              <CardTitle className="text-sm font-semibold text-slate-700">Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <Button variant="outline" className="w-full justify-start text-xs font-semibold" asChild>
                <Link href={`/admin/users/${report.target}`}>
                  <UserIcon className="mr-2 h-4 w-4 text-slate-400" /> View Target Profile
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50">
                <ShieldAlert className="mr-2 h-4 w-4" /> Take Moderate Action
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
