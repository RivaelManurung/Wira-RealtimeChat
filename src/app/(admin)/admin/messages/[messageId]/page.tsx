"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Trash2, ShieldAlert, CalendarDays, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MESSAGES = [
  { id: "M-901", sender: "Alex Rivai", room: "Designers", content: "Check the new Geist font guys!", status: "safe", date: "6/5/2026" },
  { id: "M-902", sender: "John Doe", room: "DM: Sarah", content: "Hey, are you free today?", status: "flagged", date: "6/5/2026" },
  { id: "M-903", sender: "Elena S.", room: "Marketing", content: "Buy cheap crypto now at this link...", status: "deleted", date: "5/5/2026" },
  { id: "M-904", sender: "Harvey S.", room: "General", content: "Welcome to the team everyone!", status: "safe", date: "5/5/2026" },
  { id: "M-905", sender: "Donna P.", room: "DM: Mike", content: "Please review the document I sent", status: "safe", date: "4/5/2026" },
  { id: "M-906", sender: "Louis L.", room: "General", content: "This is completely unacceptable behavior", status: "flagged", date: "4/5/2026" },
  { id: "M-907", sender: "Rachel Z.", room: "Legal", content: "Contract draft is ready for review", status: "safe", date: "3/5/2026" },
  { id: "M-908", sender: "Jessica P.", room: "Announcements", content: "Server maintenance tonight at 11pm", status: "safe", date: "2/5/2026" },
]

export default function MessageDetailPage({ params }: { params: Promise<{ messageId: string }> }) {
  const { messageId } = use(params)
  const msg = MESSAGES.find((m) => m.id === messageId)

  if (!msg) {
    return (
      <div className="flex-1 p-8 pt-6">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-slate-800">Message Not Found</h2>
          <Button variant="ghost" className="mt-4" asChild>
            <Link href="/admin/messages">Back to Messages</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 p-8 pt-6 max-w-4xl">
      <div className="mb-6">
        <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" asChild>
          <Link href="/admin/messages">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Messages
          </Link>
        </Button>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarFallback className="bg-slate-100 text-slate-600 font-bold text-lg">{msg.sender[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold text-slate-900">{msg.sender}</h1>
              <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-[10px] font-medium rounded px-2 py-0.5 border-none mt-1">
                {msg.room}
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <ShieldAlert className="mr-2 h-4 w-4 text-amber-500" /> Flag Message
            </Button>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" /> Delete Permanently
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <Card className="border bg-white shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50/50 border-b">
            <CardTitle className="text-sm font-semibold text-slate-700">Message Content</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg border text-slate-800 leading-relaxed italic">
              "{msg.content}"
            </div>
          </CardContent>
        </Card>

        <Card className="border bg-white shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50/50 border-b">
            <CardTitle className="text-sm font-semibold text-slate-700">Message Metadata</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Status</span>
                <div className="col-span-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      msg.status === "safe"
                        ? "bg-emerald-100 text-emerald-700"
                        : msg.status === "flagged"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                    } rounded-full text-[10px] font-bold border-none uppercase`}
                  >
                    {msg.status}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Date Sent</span>
                <div className="col-span-2 flex items-center gap-2 text-slate-700 text-sm">
                  <CalendarDays className="h-4 w-4 text-slate-400" />
                  {msg.date}
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Message ID</span>
                <div className="col-span-2 font-mono text-xs text-slate-400">{msg.id}</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="text-sm font-medium text-slate-500">Room</span>
                <div className="col-span-2 flex items-center gap-2 text-slate-700 text-sm">
                  <MessageSquare className="h-4 w-4 text-slate-400" />
                  {msg.room}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
