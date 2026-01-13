export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ravi Lodhi. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            System Status: Online
          </span>
          <p>Designed & Engineered with Next.js 16</p>
        </div>
      </div>
    </footer>
  )
}
