"use client"

import { 
  ChevronLeft, 
  Search, 
  Download, 
  Filter,
  History,
  ShieldCheck,
  UserCheck,
  AlertTriangle
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const AUDIT_LOGS = [
  { id: "A-001", admin: "SuperAdmin", action: "Updated System Settings", target: "Core Config", time: "5m ago", status: "success" },
  { id: "A-002", admin: "Moderator_1", action: "Banned User", target: "John Doe", time: "1h ago", status: "success" },
  { id: "A-003", admin: "System", action: "Auto-Migration", target: "DB Schema", time: "3h ago", status: "warning" },
  { id: "A-004", admin: "SuperAdmin", action: "Deleted Report", target: "Report #123", time: "Yesterday", status: "success" },
];

export default function AdminAuditLogPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 -ml-2" asChild>
            <Link href="/admin/settings">
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-xl font-black tracking-tight">Audit Log</h1>
        </div>
        <Button variant="outline" className="rounded-full h-11 px-6 gap-2 border-zinc-200 dark:border-zinc-800">
          <Download className="h-4 w-4" /> Export CSV
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input 
            placeholder="Search by admin, action, or target..." 
            className="h-14 pl-12 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-2xl"
          />
        </div>
        <Button variant="outline" className="h-14 rounded-2xl px-6 gap-2 border-zinc-200 dark:border-zinc-800">
          <Filter className="h-4 w-4" /> Filter By Date
        </Button>
      </div>

      <div className="rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 shadow-sm">
        <Table>
          <TableHeader className="bg-zinc-50 dark:bg-zinc-800/50">
            <TableRow className="hover:bg-transparent border-zinc-100 dark:border-zinc-800">
              <TableHead className="font-bold py-6 px-6">Administrator</TableHead>
              <TableHead className="font-bold">Action</TableHead>
              <TableHead className="font-bold">Target</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="text-right font-bold pr-6">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {AUDIT_LOGS.map((log) => (
              <TableRow key={log.id} className="border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50/30 dark:hover:bg-zinc-800/30">
                <TableCell className="py-6 px-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                       {log.admin === 'System' ? <ShieldCheck className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                    </div>
                    <span className="text-sm font-bold">{log.admin}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm font-medium">{log.action}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="rounded-full px-3 text-[10px] font-bold bg-zinc-100 dark:bg-zinc-800 border-none">{log.target}</Badge>
                </TableCell>
                <TableCell>
                  <Badge className={`
                    rounded-full px-3 h-6 font-black uppercase text-[9px] border-none
                    ${log.status === 'success' ? 'bg-green-500/10 text-green-600' : 'bg-amber-500/10 text-amber-600'}
                  `}>
                    {log.status}
                    {log.status === 'warning' && <AlertTriangle className="h-3 w-3 ml-1" />}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{log.time}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
