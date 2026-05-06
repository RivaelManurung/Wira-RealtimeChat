"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function BioOnboarding() {
  const router = useRouter();

  return (
    <Card className="shadow-lg border-zinc-200 dark:border-zinc-800">
      <CardHeader>
        <CardTitle>Tell us about yourself</CardTitle>
        <CardDescription>Share a bit about who you are</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <textarea
            id="bio"
            className="flex min-h-[120px] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
            placeholder="I love chatting..."
          />
        </div>
        <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <div className="space-y-0.5">
            <Label className="text-base">Online Status</Label>
            <p className="text-sm text-zinc-500">Show when you are active</p>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button variant="ghost" className="flex-1" onClick={() => router.back()}>Back</Button>
        <Button className="flex-[2]" onClick={() => router.push("/onboarding/preferences")}>Continue</Button>
      </CardFooter>
    </Card>
  );
}
