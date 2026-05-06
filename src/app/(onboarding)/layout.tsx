import { MessageCircle } from "lucide-react";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center p-6">
      <div className="mb-8 flex flex-col items-center">
        <MessageCircle className="h-10 w-10 text-zinc-900 dark:text-white mb-2" />
        <h2 className="text-2xl font-bold tracking-tight">RealtimeChat</h2>
      </div>
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
