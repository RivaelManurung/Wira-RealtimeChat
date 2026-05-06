"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Pencil, Trash2, CalendarDays, User as UserIcon, ShieldAlert, Shield, Ban } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const USERS = [
  { id: "1", name: "Sarah Wilson", email: "sarah@example.com", status: "Online", role: "User", joined: "16/4/2026" },
  { id: "2", name: "Mike Ross", email: "mike.ross@gmail.com", status: "Offline", role: "Moderator", joined: "15/4/2026" },
  { id: "3", name: "Elena Gilbert", email: "elena@vamp.com", status: "Online", role: "User", joined: "14/4/2026" },
  { id: "4", name: "Harvey Specter", email: "harvey@suits.com", status: "Offline", role: "Admin", joined: "13/4/2026" },
  { id: "5", name: "Donna Paulsen", email: "donna@suits.com", status: "Online", role: "User", joined: "11/4/2026" },
  { id: "6", name: "Louis Litt", email: "louis@suits.com", status: "Banned", role: "User", joined: "9/4/2026" },
  { id: "7", name: "Rachel Zane", email: "rachel@suits.com", status: "Online", role: "User", joined: "6/4/2026" },
  { id: "8", name: "Jessica Pearson", email: "jessica@suits.com", status: "Offline", role: "Admin", joined: "2/4/2026" },
]

export default function UserDetailPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params)
  const user = USERS.find((u) => u.id === userId)

  if (!user) {
    return (
      <div className="flex-1 p-8 pt-6">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-slate-800">User Not Found</h2>
          <Button variant="ghost" className="mt-4" asChild>
            <Link href="/admin/users">Back to Users</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 p-8 pt-6 max-w-4xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" asChild>
          <Link href="/admin/users">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Users
          </Link>
        </Button>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 shadow-md border-2 border-white">
              <AvatarFallback className="bg-indigo-100 text-indigo-700 font-bold text-2xl">{user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 leading-tight">{user.name}</h1>
              <p className="text-muted-foreground font-medium">{user.email}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href={`/admin/users/${user.id}/edit`}>
                <Pencil className="mr-2 h-4 w-4" /> Edit Profile
              </Link>
            </Button>
            <Button variant="destructive">
              <Ban className="mr-2 h-4 w-4" /> Ban User
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 border bg-white shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50/50 border-b">
            <CardTitle className="text-sm font-semibold text-slate-700">Account Details</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Status</span>
                <div className="col-span-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      user.status === "Online"
                        ? "bg-emerald-100 text-emerald-700"
                        : user.status === "Banned"
                        ? "bg-red-100 text-red-700"
                        : "bg-slate-100 text-slate-600"
                    } rounded-full text-[10px] font-bold border-none`}
                  >
                    {user.status}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Role</span>
                <div className="col-span-2 flex items-center gap-2">
                  {user.role === "Admin" && <ShieldAlert className="h-4 w-4 text-rose-500" />}
                  {user.role === "Moderator" && <Shield className="h-4 w-4 text-indigo-500" />}
                  {user.role === "User" && <UserIcon className="h-4 w-4 text-slate-400" />}
                  <span className="text-sm font-semibold text-slate-700">{user.role}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Joined Date</span>
                <div className="col-span-2 flex items-center gap-2 text-slate-700 text-sm">
                  <CalendarDays className="h-4 w-4 text-slate-400" />
                  {user.joined}
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">User ID</span>
                <div className="col-span-2 font-mono text-xs text-slate-400">{user.id}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border bg-white shadow-sm overflow-hidden h-fit">
          <CardHeader className="bg-slate-50/50 border-b">
            <CardTitle className="text-sm font-semibold text-slate-700">Account Security</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <Button variant="outline" className="w-full justify-start text-xs font-semibold py-5">
              <Trash2 className="mr-2 h-4 w-4 text-red-500" /> Reset Password
            </Button>
            <Button variant="outline" className="w-full justify-start text-xs font-semibold py-5 text-red-600 hover:text-red-700 hover:bg-red-50">
              <Trash2 className="mr-2 h-4 w-4" /> Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
