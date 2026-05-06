"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun, Monitor } from "lucide-react";

export default function PreferencesOnboarding() {
  const router = useRouter();

  return (
    <Card className="shadow-lg border-zinc-200 dark:border-zinc-800">
      <CardHeader>
        <CardTitle>Final touches</CardTitle>
        <CardDescription>Customize your experience</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label>Theme Preference</Label>
          <Tabs defaultValue="system" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="light" className="flex items-center gap-2">
                <Sun className="h-4 w-4" /> Light
              </TabsTrigger>
              <TabsTrigger value="dark" className="flex items-center gap-2">
                <Moon className="h-4 w-4" /> Dark
              </TabsTrigger>
              <TabsTrigger value="system" className="flex items-center gap-2">
                <Monitor className="h-4 w-4" /> System
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="space-y-4">
          <Label>Notifications</Label>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox id="push" defaultChecked />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="push" className="text-sm font-medium">Push Notifications</label>
                <p className="text-xs text-zinc-500">Get notified when you receive a message</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="sounds" defaultChecked />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="sounds" className="text-sm font-medium">Notification Sounds</label>
                <p className="text-xs text-zinc-500">Play a sound for new messages</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button variant="ghost" className="flex-1" onClick={() => router.back()}>Back</Button>
        <Button className="flex-[2]" onClick={() => router.push("/chat")}>Finish Setup</Button>
      </CardFooter>
    </Card>
  );
}
