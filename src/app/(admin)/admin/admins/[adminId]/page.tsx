"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Pencil, Trash2, CalendarDays, ShieldCheck, Shield, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ADMINS = [
  { id: "1", name: "Super Admin", email: "admin@chatin.com", role: "Owner", status: "Active", lastLogin: "6/5/2026" },
  { id: "2", name: "Sarah Wilson", email: "sarah@chatin.com", role: "Moderator", status: "Active", lastLogin: "6/5/2026" },
  { id: "3", name: "John Doe", email: "john@chatin.com", role: "Moderator", status: "Active", lastLogin: "5/5/2026" },
  { id: "4", name: "Harvey Specter", email: "harvey@chatin.com", role: "Editor", status: "Inactive", lastLogin: "1/5/2026" },
  { id: "5", name: "Jessica Pearson", email: "jessica@chatin.com", role: "Owner", status: "Active", lastLogin: "6/5/2026" },
]

export default function AdminDetailPage({ params }: { params: Promise<{ adminId: string }> }) {
  const { adminId } = use(params)
  const admin = ADMINS.find((a) => a.id === adminId)

  if (!admin) {
    return (
      <div className="flex-1 p-8 pt-6">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-slate-800">Admin Not Found</h2>
          <Button variant="ghost" className="mt-4" asChild>
            <Link href="/admin/admins">Back to Admins</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 p-8 pt-6 max-w-4xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" asChild>
          <Link href="/admin/admins">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Admins
          </Link>
        </Button>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 shadow-md border-2 border-white">
              <AvatarFallback className="bg-slate-800 text-white font-bold text-2xl">{admin.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 leading-tight">{admin.name}</h1>
              <p className="text-muted-foreground font-medium">{admin.email}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href={`/admin/admins/${admin.id}/edit`}>
                <Pencil className="mr-2 h-4 w-4" /> Edit Admin
              </Link>
            </Button>
            <Button variant="destructive">
              <ShieldAlert className="mr-2 h-4 w-4" /> Revoke Access
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 border bg-white shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50/50 border-b">
            <CardTitle className="text-sm font-semibold text-slate-700">Admin Privileges</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Role</span>
                <div className="col-span-2 flex items-center gap-2">
                  {admin.role === "Owner" && <ShieldCheck className="h-4 w-4 text-amber-500" />}
                  {admin.role === "Moderator" && <Shield className="h-4 w-4 text-indigo-500" />}
                  {admin.role === "Editor" && <Shield className="h-4 w-4 text-slate-400" />}
                  <span className="text-sm font-semibold text-slate-700">{admin.role}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Status</span>
                <div className="col-span-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      admin.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
                    } rounded-full text-[10px] font-bold border-none`}
                  >
                    {admin.status}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Last Login</span>
                <div className="col-span-2 flex items-center gap-2 text-slate-700 text-sm">
                  <CalendarDays className="h-4 w-4 text-slate-400" />
                  {admin.lastLogin}
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Admin ID</span>
                <div className="col-span-2 font-mono text-xs text-slate-400">{admin.id}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border bg-white shadow-sm overflow-hidden h-fit">
          <CardHeader className="bg-slate-50/50 border-b">
            <CardTitle className="text-sm font-semibold text-slate-700">Security & Logs</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <Button variant="outline" className="w-full justify-start text-xs font-semibold py-5">
              View Activity Logs
            </Button>
            <Button variant="outline" className="w-full justify-start text-xs font-semibold py-5 text-red-600 hover:text-red-700 hover:bg-red-50">
              <Trash2 className="mr-2 h-4 w-4" /> Delete Logs
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
