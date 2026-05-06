"use client"

import { 
  ShieldAlert, 
  MoreHorizontal, 
  CheckCircle2, 
  XCircle,
  Eye,
  Filter,
  Download
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const REPORTS = [
  { id: "REP-9821", target: "John Doe", type: "User", reason: "Harassment", reporter: "Sarah W.", status: "pending", date: "2026-05-01" },
  { id: "REP-9822", target: "Designers Group", type: "Group", reason: "Spam", reporter: "Mike R.", status: "resolved", date: "2026-05-01" },
  { id: "REP-9823", target: "MSG-432", type: "Message", reason: "Inappropriate Content", reporter: "Elena S.", status: "pending", date: "2026-05-02" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-1">Moderation Reports</h1>
          <p className="text-zinc-500 font-medium italic">Manage and resolve reported content</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-full gap-2 border-zinc-200 dark:border-zinc-800">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Button variant="outline" className="rounded-full gap-2 border-zinc-200 dark:border-zinc-800">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rounded-3xl border-zinc-200 dark:border-zinc-800 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-zinc-400">Total Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black">42</div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl border-zinc-200 dark:border-zinc-800 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-zinc-400">Resolved Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-green-500">18</div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl border-zinc-200 dark:border-zinc-800 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-zinc-400">Avg Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black">2.4h</div>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 shadow-sm">
        <Table>
          <TableHeader className="bg-zinc-50 dark:bg-zinc-800/50">
            <TableRow className="hover:bg-transparent border-zinc-100 dark:border-zinc-800">
              <TableHead className="font-bold py-5 px-6">ID</TableHead>
              <TableHead className="font-bold">Target</TableHead>
              <TableHead className="font-bold">Type</TableHead>
              <TableHead className="font-bold">Reason</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="text-right font-bold pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {REPORTS.map((report) => (
              <TableRow key={report.id} className="border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                <TableCell className="font-bold py-5 px-6">{report.id}</TableCell>
                <TableCell className="font-medium">{report.target}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="rounded-full px-3">{report.type}</Badge>
                </TableCell>
                <TableCell className="text-zinc-500 font-medium italic">{report.reason}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {report.status === "pending" ? (
                      <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-none rounded-full px-3 font-bold">Pending</Badge>
                    ) : (
                      <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-none rounded-full px-3 font-bold">Resolved</Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-2xl p-2 w-48">
                      <DropdownMenuItem className="rounded-xl gap-3 p-3">
                        <Eye className="h-4 w-4" /> View Detail
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl gap-3 p-3 text-green-600">
                        <CheckCircle2 className="h-4 w-4" /> Resolve
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl gap-3 p-3 text-red-500">
                        <XCircle className="h-4 w-4" /> Reject
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
