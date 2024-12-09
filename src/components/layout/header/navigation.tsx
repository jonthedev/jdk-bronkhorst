import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { mainNavItems } from "@/lib/constants/navigation"

export function Navigation() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {mainNavItems.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-white hover:text-white/80 text-sm font-medium"
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Button variant="ghost" size="icon" className="text-white">
            <Search className="h-5 w-5" />
          </Button>
        </li>
      </ul>
    </nav>
  )
}
