'use client'

import { GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '~/components/theme-toggle'
import { Button } from '~/components/ui/button'

export function Nav() {
  return (
    <nav className="fixed top-0 left-6 right-6 flex justify-between items-center py-4">
      <div className="flex items-center font-bold">
        <GraduationCap className="w-6 h-6 mr-2" />
        <span className="hidden sm:inline-block">Fatequense</span>
      </div>

      <div className="flex items-center space-x-2">
        <Button asChild>
          <Link href="/login">Entrar</Link>
        </Button>

        <ThemeToggle />
      </div>
    </nav>
  )
}
