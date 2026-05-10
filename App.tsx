import { Menu } from "lucide-react";

import { Button } from "./components/ui/button";

const navItems = ["Studio", "About", "Journal", "Reach Us"];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 min-h-screen">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
          <div className="h-11 w-11 md:w-24" aria-hidden="true" />

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm text-foreground transition-colors">
              Home
            </a>
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className="liquid-glass hidden rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03] md:inline-flex"
              variant="ghost"
            >
              Begin Journey
            </Button>

            <button
              type="button"
              className="liquid-glass inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </header>

        <main className="flex min-h-[calc(100vh-96px)] flex-col items-center justify-center px-6 pb-40 pt-32 text-center [padding-block:90px]">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
            <h1
              className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Where <em className="not-italic text-muted-foreground">dreams</em> rise{" "}
              <em className="not-italic text-muted-foreground">through the silence.</em>
            </h1>

            <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels.
              Amid the chaos, we build digital spaces for sharp focus and inspired work.
            </p>

            <Button className="liquid-glass animate-fade-rise-delay-2 mt-12 rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]">
              Begin Journey
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
