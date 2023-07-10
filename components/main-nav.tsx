import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center ", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary px-3 py-2 mx-1 bg-primary-foreground rounded"
      >
        Dashboard
      </Link>

      <Link
        href="/knowledge-base"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-3 py-2 mx-1 hover:bg-primary-foreground rounded"
      >
        AI Data Source

      </Link>
      <Link
        href="style"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-3 py-2 mx-1 hover:bg-primary-foreground rounded"
      >
        Style
      </Link>
      <Link
        href="prompts"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-3 py-2 mx-1 hover:bg-primary-foreground rounded"
      >
        Prompts
      </Link>


      <Link
        href="/inbox"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-3 py-2 mx-1 hover:bg-primary-foreground rounded"
      >
        Convertions
      </Link>
      <Link
        href="integrations"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-3 py-2 mx-1 hover:bg-primary-foreground rounded"
      >
        Integrations
      </Link>
      <Link
        href="settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-3 py-2 mx-1 hover:bg-primary-foreground rounded"
      >
        Settings
      </Link>
    </nav>
  )
}
