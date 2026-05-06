"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save, Mail } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function CreateAdminPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("Moderator")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email) {
      toast.error("Nama dan email wajib diisi")
      return
    }
    toast.success("Admin berhasil ditambahkan", { description: `${name} telah di-invite.` })
    router.push("/admin/admins")
  }

  return (
    <div className="flex-1 p-8 pt-6 max-w-2xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" asChild>
          <Link href="/admin/admins">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Admins
          </Link>
        </Button>
      </div>

      <Card className="border bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Invite Admin Baru</CardTitle>
          <CardDescription className="text-sm">Kirim undangan ke anggota tim baru untuk membantu moderasi.</CardDescription>
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
                <Link href="/admin/admins">Batal</Link>
              </Button>
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Mail className="mr-2 h-4 w-4" /> Kirim Undangan
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
