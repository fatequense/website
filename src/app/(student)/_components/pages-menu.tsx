'use client'

import { GraduationCap, Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '~/components/ui/button'
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  Sheet,
} from '~/components/ui/sheet'
import { dashboardConfig } from '~/config/dashboard'
import { cn } from '~/lib/utils'

export function PagesMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <div className="flex items-center w-fit mx-2 p-3 rounded-md bg-red-900/10 text-red-600">
            <GraduationCap className="w-5 h-5" />
          </div>
        </SheetHeader>

        <div className="h-full mt-4 space-y-2">
          {dashboardConfig.sidebarNav.map((link) => (
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
              <Link href={link.disabled ? '#' : link.href}>
                <link.icon className="w-4 h-4 mr-2" />
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
