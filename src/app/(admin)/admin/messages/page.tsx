"use client"

import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Trash2, 
  Eye, 
  ShieldAlert,
  Download,
  MessageSquare
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const MESSAGES = [
  { id: "M-901", sender: "Alex Rivai", room: "Designers", content: "Check the new Geist font guys!", status: "safe", date: "2m ago" },
  { id: "M-902", sender: "John Doe", room: "DM: Sarah", content: "Hey, are you free today?", status: "flagged", date: "1h ago" },
  { id: "M-903", sender: "Elena S.", room: "Marketing", content: "Buy cheap crypto now at this link...", status: "deleted", date: "3h ago" },
];

export default function AdminMessagesPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-1">Message Management</h1>
          <p className="text-zinc-500 font-medium italic">Monitor and moderate all communication channels</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-full gap-2 border-zinc-200 dark:border-zinc-800 h-11">
            <Download className="h-4 w-4" /> Export Logs
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input 
            placeholder="Search messages by content or sender..." 
            className="h-14 pl-12 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-2xl"
          />
        </div>
        <Button variant="outline" className="h-14 rounded-2xl px-6 gap-2 border-zinc-200 dark:border-zinc-800">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 shadow-sm">
        <Table>
          <TableHeader className="bg-zinc-50 dark:bg-zinc-800/50">
            <TableRow className="hover:bg-transparent border-zinc-100 dark:border-zinc-800">
              <TableHead className="font-bold py-6 px-6">Sender</TableHead>
              <TableHead className="font-bold">Room</TableHead>
              <TableHead className="font-bold">Message Preview</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="text-right font-bold pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MESSAGES.map((msg) => (
              <TableRow key={msg.id} className="border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                <TableCell className="py-6 px-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-zinc-100 dark:border-zinc-800">
                      <AvatarFallback>{msg.sender[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-bold">{msg.sender}</p>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase">{msg.date}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                   <Badge variant="outline" className="rounded-full px-3 text-[10px] font-bold">{msg.room}</Badge>
                </TableCell>
                <TableCell className="max-w-xs">
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 truncate">{msg.content}</p>
                </TableCell>
                <TableCell>
                  <Badge className={`
                    rounded-full px-3 h-6 font-black uppercase text-[9px] border-none
                    ${msg.status === 'safe' ? 'bg-green-500/10 text-green-600' : 
                      msg.status === 'flagged' ? 'bg-amber-500/10 text-amber-600' : 'bg-red-500/10 text-red-600'}
                  `}>
                    {msg.status}
                  </Badge>
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
                        <Eye className="h-4 w-4" /> View Thread
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl gap-3 p-3 text-amber-600">
                        <ShieldAlert className="h-4 w-4" /> Flag Message
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl gap-3 p-3 text-red-500">
                        <Trash2 className="h-4 w-4" /> Delete Permanently
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
