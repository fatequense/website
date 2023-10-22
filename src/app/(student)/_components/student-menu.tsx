'use client'

import Link from 'next/link'
import { User, Settings, Globe, Code, Github, LogOut } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  Sheet,
} from '~/components/ui/sheet'
import { UserAvatar } from '~/components/user-avatar'
import { signOut } from 'next-auth/react'
import { useProfile } from '~/hooks/use-profile'

export function StudentMenu() {
  const { data: profile } = useProfile()

  return (
    <Sheet>
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
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground pointer-events-none"
            asChild
          >
            <Link href="#">
              <User className="w-4 h-4 mr-2" />
              <span>Perfil</span>
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/aluno/opcoes">
              <Settings className="w-4 h-4 mr-2" />
              <span>Opções</span>
            </Link>
          </Button>

          <Separator />

          <Button variant="ghost" className="w-full justify-start" asChild>
            <a
              href="https://siga.cps.sp.gov.br/ALUNO/login.aspx"
              target="_blank"
              rel="noreferrer"
            >
              <Globe className="w-4 h-4 mr-2" />
              <span>SIGA</span>
            </a>
          </Button>

          <Separator />

          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground pointer-events-none"
            asChild
          >
            <Link href="#">
              <Code className="w-4 h-4 mr-2" />
              <span>Desenvolvedor</span>
            </Link>
          </Button>

          <Button variant="ghost" className="w-full justify-start" asChild>
            <a
              href="https://github.com/fatequense/website"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              <span>GitHub</span>
            </a>
          </Button>
          <Separator />

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
