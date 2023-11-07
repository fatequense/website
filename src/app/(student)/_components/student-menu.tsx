'use client'

import Link from 'next/link'
import { LogOut } from 'lucide-react'

import { Button } from '~/components/ui/button'
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  Sheet,
} from '~/components/ui/sheet'
import { UserAvatar } from '~/components/user-avatar'
import { signOut } from 'next-auth/react'
import { useProfile } from '~/hooks/use-profile'
import { useState } from 'react'
import { dashboardConfig } from '~/config/dashboard'
import { cn } from '~/lib/utils'

export function StudentMenu() {
  const [open, setOpen] = useState(false)
  const { data: profile } = useProfile()

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger>
        <UserAvatar />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex-row space-y-0 space-x-2">
          <UserAvatar />

          <div>
            <p className="text-sm line-clamp-1">{profile?.name}</p>
            <span className="text-xs text-muted-foreground line-clamp-1">
              {profile?.institutionalEmail}
            </span>
          </div>
        </SheetHeader>

        <div className="h-full mt-4 space-y-2">
          {dashboardConfig.studentNav.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              className={cn(
                'w-full justify-start',
                link.disabled && 'pointer-events-none text-muted-foreground',
              )}
              onClick={() => setOpen(false)}
              asChild
            >
              {link.external ? (
                <a href={link.href} target="_blank" rel="noreferrer">
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.label}
                </a>
              ) : (
                <Link href={link.href}>
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.label}
                </Link>
              )}
            </Button>
          ))}

          <Button
            variant="destructive"
            className="w-full justify-start mt-auto"
            onClick={() => {
              signOut({ callbackUrl: `${window.location.origin}/login` })
            }}
          >
            <LogOut className="w-4 h-4 mr-2" />
            <span>Sair</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
