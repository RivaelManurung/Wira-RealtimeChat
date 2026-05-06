"use client"

import Link from "next/link"
import { ArrowLeft, Lock, RefreshCw } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function ApiKeysPage() {
  function handleRegenerate() {
    toast.success("API Key di-regenerate", { description: "Kunci baru telah dibuat. Kunci lama tidak lagi valid." })
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
            <Lock className="h-4 w-4 text-slate-400" />
            <CardTitle className="text-lg font-semibold text-slate-800">API Access Keys</CardTitle>
          </div>
          <CardDescription className="text-sm">Kelola kunci API untuk integrasi sistem eksternal.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3">
            <Label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Public Key</Label>
            <div className="flex gap-2">
              <Input readOnly value="pk_live_chatin_a1b2c3d4e5f6g7h8i9j0" className="font-mono text-xs bg-slate-50" />
              <Button variant="outline" size="sm" onClick={() => {
                navigator.clipboard.writeText("pk_live_chatin_a1b2c3d4e5f6g7h8i9j0")
                toast.success("Public Key disalin")
              }}>Copy</Button>
            </div>
          </div>
          
          <div className="grid gap-3">
            <Label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Secret Key</Label>
            <div className="flex gap-2">
              <Input readOnly type="password" value="sk_live_chatin_x9y8z7w6v5u4t3s2r1q0" className="font-mono text-xs bg-slate-50" />
              <Button variant="outline" size="sm" onClick={() => {
                navigator.clipboard.writeText("sk_live_chatin_x9y8z7w6v5u4t3s2r1q0")
                toast.success("Secret Key disalin")
              }}>Copy</Button>
            </div>
            <p className="text-[10px] text-red-500 font-medium italic">Jangan pernah bagikan secret key Anda kepada siapapun.</p>
          </div>

          <div className="pt-6 border-t">
            <Button className="bg-red-600 hover:bg-red-700 text-white w-full" onClick={handleRegenerate}>
              <RefreshCw className="mr-2 h-4 w-4" /> Regenerate All Keys
            </Button>
            <p className="text-[11px] text-muted-foreground text-center mt-3">
              Regenerating keys will immediately invalidate your old keys and break existing integrations.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
