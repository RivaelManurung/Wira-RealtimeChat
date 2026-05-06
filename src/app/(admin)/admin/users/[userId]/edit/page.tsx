"use client"

import { useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

export default function EditUserPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params)
  const router = useRouter()
  const user = USERS.find((u) => u.id === userId)

  const [name, setName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")
  const [role, setRole] = useState(user?.role || "User")

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email) {
      toast.error("Nama dan email wajib diisi")
      return
    }
    toast.success("Pengguna berhasil diperbarui", { description: `Data ${name} telah diupdate.` })
    router.push(`/admin/users/${userId}`)
  }

  return (
    <div className="flex-1 p-8 pt-6 max-w-2xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" asChild>
          <Link href={`/admin/users/${userId}`}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Detail
          </Link>
        </Button>
      </div>

      <Card className="border bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Edit Pengguna</CardTitle>
          <CardDescription className="text-sm">Perbarui informasi profil dan hak akses pengguna.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input id="name" placeholder="Masukkan nama lengkap" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="User">User</option>
                <option value="Moderator">Moderator</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="flex gap-3 pt-4 border-t">
              <Button type="button" variant="outline" asChild>
                <Link href={`/admin/users/${userId}`}>Batal</Link>
              </Button>
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Save className="mr-2 h-4 w-4" /> Simpan Perubahan
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
