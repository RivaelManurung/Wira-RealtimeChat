"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Terminal, Save, Plus, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function WebhooksPage() {
  const [url, setUrl] = useState("https://api.myapp.com/webhooks/chatin")
  const [secret, setSecret] = useState("whsec_5f6g7h8i9j0a1b2c3d4e")

  function handleSave() {
    toast.success("Webhook disimpan", { description: "Konfigurasi webhook telah diperbarui." })
  }

  return (
    <div className="flex-1 p-8 pt-6 max-w-2xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" asChild>
          <Link href="/admin/settings">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Settings
          </Link>
        </Button>
      </div>

      <Card className="border bg-white shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-slate-400" />
            <CardTitle className="text-lg font-semibold text-slate-800">Webhook Configuration</CardTitle>
          </div>
          <CardDescription className="text-sm">Atur endpoint webhook untuk menerima event notifikasi real-time.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="webhook-url">Endpoint URL</Label>
            <Input id="webhook-url" placeholder="https://your-server.com/webhook" value={url} onChange={(e) => setUrl(e.target.value)} />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="webhook-secret">Signing Secret</Label>
            <Input id="webhook-secret" placeholder="whsec_..." value={secret} onChange={(e) => setSecret(e.target.value)} />
            <p className="text-[10px] text-muted-foreground italic">Gunakan secret ini untuk memverifikasi payload webhook di server Anda.</p>
          </div>

          <div className="space-y-3 pt-4 border-t">
            <Label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Events to Deliver</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { id: "user.created", label: "User Created" },
                { id: "user.deleted", label: "User Deleted" },
                { id: "message.flagged", label: "Message Flagged" },
                { id: "message.deleted", label: "Message Deleted" },
                { id: "report.created", label: "Report Created" },
                { id: "room.created", label: "Room Created" },
              ].map((event) => (
                <div key={event.id} className="flex items-center space-x-2 p-3 rounded-md border bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <Checkbox id={event.id} defaultChecked />
                  <label htmlFor={event.id} className="text-sm font-medium leading-none cursor-pointer">
                    {event.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-6 border-t">
            <Button variant="outline" className="flex-1" asChild>
              <Link href="/admin/settings">Batal</Link>
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white flex-1" onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" /> Simpan Konfigurasi
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6 border border-amber-100 bg-amber-50/30 shadow-sm">
        <CardHeader className="py-4">
          <CardTitle className="text-sm font-semibold text-amber-800">Test Webhook</CardTitle>
        </CardHeader>
        <CardContent className="pb-4 flex gap-3">
          <Button variant="outline" size="sm" className="bg-white border-amber-200 text-amber-800 hover:bg-amber-50">
            Send Test Payload
          </Button>
          <Button variant="ghost" size="sm" className="text-amber-700 hover:text-amber-800 hover:bg-amber-100">
            View Recent Deliveries
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
