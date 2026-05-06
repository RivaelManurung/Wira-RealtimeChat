"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";

export default function ProfileOnboarding() {
  const router = useRouter();

  return (
    <Card className="shadow-lg border-zinc-200 dark:border-zinc-800">
      <CardHeader>
        <CardTitle>Create your profile</CardTitle>
        <CardDescription>First, let&apos;s set up your identity</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <Avatar className="h-24 w-24 border-2 border-zinc-100 dark:border-zinc-800">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-500">JD</AvatarFallback>
            </Avatar>
            <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-sm">
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-zinc-500">Upload a profile photo</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="johndoe" />
          <p className="text-xs text-zinc-500">This is how others will find you</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="display-name">Display Name</Label>
          <Input id="display-name" placeholder="John Doe" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => router.push("/onboarding/bio")}>
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
}
