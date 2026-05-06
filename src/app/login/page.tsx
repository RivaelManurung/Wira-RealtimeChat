import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Globe } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6">
      <div className="mb-8 flex flex-col items-center">
        <MessageCircle className="h-10 w-10 text-zinc-900 dark:text-white mb-2" />
        <h2 className="text-2xl font-bold tracking-tight">RealtimeChat</h2>
      </div>
      <Card className="w-full max-w-md shadow-lg border-zinc-200 dark:border-zinc-800">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button variant="outline" className="w-full h-12 text-base font-medium flex items-center justify-center gap-3">
            <Globe className="h-5 w-5" />
            Continue with Google
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-zinc-950 px-2 text-zinc-500">Or continue with email</span>
            </div>
          </div>
          <Button variant="secondary" className="w-full h-12 text-base font-medium">
            Continue with Email
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 text-center">
          <p className="text-sm text-zinc-500">
            By clicking continue, you agree to our{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-white">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </CardFooter>
      </Card>
      <p className="mt-8 text-sm text-zinc-500">
        Don&apos;t have an account?{" "}
        <Link href="#" className="font-semibold text-zinc-900 dark:text-white hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
