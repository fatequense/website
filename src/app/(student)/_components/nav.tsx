import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

import { ThemeToggle } from '~/components/theme-toggle'

import { PagesMenu } from './pages-menu'
import { StudentMenu } from './student-menu'

export function Nav() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <PagesMenu />

        <Link
          href="/aluno"
          className="flex items-center px-3 py-2 rounded-md bg-red-900/10 text-red-600 hover:bg-red-900/20"
        >
          <GraduationCap className="w-5 h-5 mr-2" />
          <span className="text-xs font-bold">Fatequense</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <StudentMenu />
      </div>
    </nav>
  )
}
