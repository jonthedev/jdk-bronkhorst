import Link from "next/link"
import { Navigation } from "./navigation"
import { LanguageSwitcher } from "./language-switcher"
import { Diamond } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-white/10 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Diamond className="h-8 w-8 text-white" />
                <span>Bronkhurst</span>
              </div>
            </Link>

            {/* Main Navigation */}
            <Navigation />

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                href="/account"
                className="text-sm text-white hover:text-white/80"
              >
                My Bronkhorst
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
