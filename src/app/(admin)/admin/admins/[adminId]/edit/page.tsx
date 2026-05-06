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

const ADMINS = [
  { id: "1", name: "Super Admin", email: "admin@chatin.com", role: "Owner", status: "Active", lastLogin: "6/5/2026" },
  { id: "2", name: "Sarah Wilson", email: "sarah@chatin.com", role: "Moderator", status: "Active", lastLogin: "6/5/2026" },
  { id: "3", name: "John Doe", email: "john@chatin.com", role: "Moderator", status: "Active", lastLogin: "5/5/2026" },
  { id: "4", name: "Harvey Specter", email: "harvey@chatin.com", role: "Editor", status: "Inactive", lastLogin: "1/5/2026" },
  { id: "5", name: "Jessica Pearson", email: "jessica@chatin.com", role: "Owner", status: "Active", lastLogin: "6/5/2026" },
]

export default function EditAdminPage({ params }: { params: Promise<{ adminId: string }> }) {
  const { adminId } = use(params)
  const router = useRouter()
  const admin = ADMINS.find((a) => a.id === adminId)

  const [name, setName] = useState(admin?.name || "")
  const [email, setEmail] = useState(admin?.email || "")
  const [role, setRole] = useState(admin?.role || "Moderator")

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email) {
      toast.error("Nama dan email wajib diisi")
      return
    }
    toast.success("Admin berhasil diperbarui", { description: `Data ${name} telah diupdate.` })
    router.push(`/admin/admins/${adminId}`)
  }

  return (
    <div className="flex-1 p-8 pt-6 max-w-2xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" asChild>
          <Link href={`/admin/admins/${adminId}`}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Detail
          </Link>
        </Button>
      </div>

      <Card className="border bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Edit Admin</CardTitle>
          <CardDescription className="text-sm">Perbarui informasi dan role admin.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input id="name" placeholder="Nama lengkap admin" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@chatin.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Owner">Owner</option>
                <option value="Moderator">Moderator</option>
                <option value="Editor">Editor</option>
              </select>
            </div>
            <div className="flex gap-3 pt-4 border-t">
              <Button type="button" variant="outline" asChild>
                <Link href={`/admin/admins/${adminId}`}>Batal</Link>
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
