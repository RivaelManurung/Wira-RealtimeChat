"use client"

import { useState } from "react"
import Link from "next/link"
import { Settings, ShieldCheck, Activity, Lock, Terminal, Cloud, Database } from "lucide-react"
import { toast } from "sonner"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
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

export default function AdminSettingsPage() {
  const [maintenance, setMaintenance] = useState(false)
  const [registration, setRegistration] = useState(true)
  const [publicGroups, setPublicGroups] = useState(true)
  const [fileSharing, setFileSharing] = useState(true)
  const [autoMod, setAutoMod] = useState(true)
  const [maintenanceConfirm, setMaintenanceConfirm] = useState(false)

  function toggleMaintenance() {
    if (!maintenance) {
      setMaintenanceConfirm(true)
    } else {
      setMaintenance(false)
      toast.success("Maintenance mode dinonaktifkan", { description: "Aplikasi kembali normal." })
    }
  }

  function confirmMaintenance() {
    setMaintenance(true)
    setMaintenanceConfirm(false)
    toast.warning("Maintenance mode diaktifkan!", { description: "Semua pengguna tidak dapat mengakses aplikasi." })
  }

  function handleToggle(name: string, value: boolean, setter: (v: boolean) => void) {
    setter(!value)
    toast.success(`${name} ${!value ? "diaktifkan" : "dinonaktifkan"}`, {
      description: `Pengaturan ${name.toLowerCase()} telah diperbarui.`,
    })
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div>
        <p className="text-sm text-muted-foreground">Kelola konfigurasi aplikasi dan sistem</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border bg-white shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-muted-foreground" />
                <CardTitle className="text-sm font-semibold text-slate-700">Konfigurasi Utama</CardTitle>
              </div>
              <CardDescription className="text-xs">Flags global untuk perilaku aplikasi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-md bg-slate-50 border border-slate-100">
                <div className="space-y-0.5">
                  <Label className="text-sm font-semibold text-slate-700">Maintenance Mode</Label>
                  <p className="text-xs text-muted-foreground">Nonaktifkan akses pengguna untuk maintenance darurat</p>
                </div>
                <Switch
                  checked={maintenance}
                  onCheckedChange={toggleMaintenance}
                  className="data-[state=checked]:bg-red-500"
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-md bg-slate-50 border border-slate-100">
                <div className="space-y-0.5">
                  <Label className="text-sm font-semibold text-slate-700">Registrasi Pengguna Baru</Label>
                  <p className="text-xs text-muted-foreground">Izinkan pengguna baru membuat akun</p>
                </div>
                <Switch
                  checked={registration}
                  onCheckedChange={() => handleToggle("Registrasi", registration, setRegistration)}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-md bg-slate-50 border border-slate-100">
                <div className="space-y-0.5">
                  <Label className="text-sm font-semibold text-slate-700">Pembuatan Grup Publik</Label>
                  <p className="text-xs text-muted-foreground">Izinkan pengguna membuat chat room publik</p>
                </div>
                <Switch
                  checked={publicGroups}
                  onCheckedChange={() => handleToggle("Grup Publik", publicGroups, setPublicGroups)}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-md bg-slate-50 border border-slate-100">
                <div className="space-y-0.5">
                  <Label className="text-sm font-semibold text-slate-700">File Sharing</Label>
                  <p className="text-xs text-muted-foreground">Izinkan pengguna mengirim file dan media</p>
                </div>
                <Switch
                  checked={fileSharing}
                  onCheckedChange={() => handleToggle("File Sharing", fileSharing, setFileSharing)}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-md bg-slate-50 border border-slate-100">
                <div className="space-y-0.5">
                  <Label className="text-sm font-semibold text-slate-700">Auto-Moderation</Label>
                  <p className="text-xs text-muted-foreground">Filter otomatis untuk kata-kata terlarang</p>
                </div>
                <Switch checked={autoMod} onCheckedChange={() => handleToggle("Auto-Moderation", autoMod, setAutoMod)} />
              </div>
            </CardContent>
          </Card>

          <Card className="border bg-white shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-indigo-500" />
                <CardTitle className="text-sm font-semibold text-slate-700">Keamanan & Integrasi</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button variant="outline" className="h-12 justify-start px-4 gap-3 text-sm font-medium" asChild>
                  <Link href="/admin/settings/api-keys">
                    <Lock className="h-4 w-4 text-slate-400" /> API Access Keys
                  </Link>
                </Button>
                <Button variant="outline" className="h-12 justify-start px-4 gap-3 text-sm font-medium" asChild>
                  <Link href="/admin/settings/webhooks">
                    <Terminal className="h-4 w-4 text-slate-400" /> Webhook Config
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <Cloud className="h-3 w-3" /> API Server
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-700 text-[10px] font-bold border-none rounded-full px-2 py-0"
                  >
                    99.9%
                  </Badge>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[99.9%] bg-emerald-500 rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <Database className="h-3 w-3" /> Database
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-700 text-[10px] font-bold border-none rounded-full px-2 py-0"
                  >
                    OK
                  </Badge>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-emerald-500 rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <Activity className="h-3 w-3" /> WebSocket
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-700 text-[10px] font-bold border-none rounded-full px-2 py-0"
                  >
                    Active
                  </Badge>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[100%] bg-emerald-500 rounded-full" />
                </div>
              </div>
              <Button variant="outline" className="w-full h-9 text-xs font-medium mt-2">
                <Activity className="h-3.5 w-3.5 mr-2" /> Run System Check
              </Button>
            </CardContent>
          </Card>

          <Card className="border bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                Info Aplikasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Versi</span>
                <span className="font-semibold text-slate-700">v2.4.1</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Environment</span>
                <Badge
                  variant="secondary"
                  className="bg-indigo-100 text-indigo-700 text-[10px] font-bold border-none rounded px-1.5 py-0"
                >
                  Production
                </Badge>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Node.js</span>
                <span className="font-semibold text-slate-700">v20.11.0</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Database</span>
                <span className="font-semibold text-slate-700">Supabase</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Uptime</span>
                <span className="font-semibold text-slate-700">14d 8h 32m</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <AlertDialog open={maintenanceConfirm} onOpenChange={setMaintenanceConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Aktifkan Maintenance Mode?</AlertDialogTitle>
            <AlertDialogDescription>
              <span className="font-semibold text-red-600">PERINGATAN:</span> Semua pengguna akan terputus dan tidak
              dapat mengakses aplikasi. Hanya admin yang bisa login selama maintenance aktif.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={confirmMaintenance}>
              Ya, Aktifkan
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
