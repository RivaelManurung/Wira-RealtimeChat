import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Shield, Zap, Globe, LayoutDashboard, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      {/* Header */}
      <header className="px-6 h-20 flex items-center justify-between sticky top-0 glass dark:glass-dark z-50 mx-4 mt-4 rounded-3xl apple-shadow">
        <Link className="flex items-center gap-2" href="#">
          <div className="h-10 w-10 bg-zinc-900 dark:bg-white rounded-xl flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-white dark:text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">RealtimeChat</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="rounded-full px-6 font-medium">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="rounded-full px-6 bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-medium">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-20 pb-32 md:pt-32 md:pb-48 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-4xl">
                <Badge variant="outline" className="px-4 py-1.5 text-xs font-bold mb-4 rounded-full border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                  Introducing Group Video Calls
                </Badge>
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
                  Connect with anyone, <br />
                  <span className="text-zinc-400 dark:text-zinc-600">anywhere in the world.</span>
                </h1>
                <p className="mx-auto max-w-[800px] text-zinc-500 md:text-2xl dark:text-zinc-400 font-medium leading-relaxed">
                  Fast, secure, and intuitive. Designed for the way you work and live.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="h-16 rounded-full px-12 text-lg bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold shadow-xl shadow-zinc-200/50 dark:shadow-none">
                  Start Chatting Now
                </Button>
                <Button size="lg" variant="outline" className="h-16 rounded-full px-12 text-lg font-bold border-2">
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-32 bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Lightning Fast", desc: "Sub-millisecond delivery across the globe.", color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
                { icon: Shield, title: "Private & Secure", desc: "End-to-end encryption by default.", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
                { icon: Globe, title: "Universal", desc: "Stay synced across all your devices.", color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
              ].map((f, i) => (
                <div key={i} className="flex flex-col p-10 rounded-[3rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 apple-shadow transition-transform hover:scale-[1.02] duration-500">
                  <div className={`h-16 w-16 ${f.bg} rounded-3xl flex items-center justify-center mb-8`}>
                    <f.icon className={`h-8 w-8 ${f.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 px-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6" />
            <span className="font-bold">RealtimeChat</span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">© 2026 RealtimeChat. Built with Geist.</p>
        </div>
        <nav className="flex gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400">Product</h4>
            <Link className="text-sm font-medium hover:text-black dark:hover:text-white" href="#">Features</Link>
            <Link className="text-sm font-medium hover:text-black dark:hover:text-white" href="#">Pricing</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400">Company</h4>
            <Link className="text-sm font-medium hover:text-black dark:hover:text-white" href="#">About</Link>
            <Link className="text-sm font-medium hover:text-black dark:hover:text-white" href="#">Privacy</Link>
          </div>
        </nav>
        <Link href="https://github.com" className="h-12 w-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
          <LayoutDashboard className="h-5 w-5" />
        </Link>
      </footer>
    </div>
  );
}
