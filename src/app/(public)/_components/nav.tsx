'use client'

import Link from 'next/link'
import { ThemeToggle } from '~/components/theme-toggle'
import { Button } from '~/components/ui/button'

export function Nav() {
  return (
    <nav className="fixed top-0 left-6 right-6 flex justify-between items-center py-4">
      <span className="font-bold">Fatequense</span>

      <div className="space-x-2">
        <Button asChild>
          <Link href="/login">Entrar</Link>
        </Button>

        <ThemeToggle />
      </div>
    </nav>
  )
}
