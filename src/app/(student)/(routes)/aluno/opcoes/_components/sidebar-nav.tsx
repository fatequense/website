'use client'

import Link from 'next/link'
import { Palette, User } from 'lucide-react'

import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import { usePathname } from 'next/navigation'

const links = [
  {
    label: 'Perfil',
    href: '/aluno/opcoes/perfil',
    icon: User,
  },
  {
    label: 'Aparência',
    href: '/aluno/opcoes/aparencia',
    icon: Palette,
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <aside className="space-y-2 md:w-56 ">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            buttonVariants({
              variant: pathname.startsWith(link.href) ? 'secondary' : 'ghost',
            }),
            'w-full justify-start',
          )}
        >
          <link.icon className="w-4 h-4 mr-2" />
          {link.label}
        </Link>
      ))}
    </aside>
  )
}
