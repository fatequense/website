import {
  GraduationCap,
  LayoutGrid,
  CircleDashed,
  Star,
  CalendarDays,
  GalleryVerticalEnd,
  SquareStack,
  Menu,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  Sheet,
} from '~/components/ui/sheet'

export function PagesMenu() {
  return (
    <Sheet>
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
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/aluno">
              <LayoutGrid className="w-4 h-4 mr-2" />
              <span>Dashboard</span>
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/aluno/faltas">
              <CircleDashed className="w-4 h-4 mr-2" />
              <span>Faltas</span>
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/aluno/notas">
              <Star className="w-4 h-4 mr-2" />
              <span>Notas</span>
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/aluno/horarios">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>Horários</span>
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/aluno/historico">
              <GalleryVerticalEnd className="w-4 h-4 mr-2" />
              <span>Histórico</span>
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/aluno/historico-grade">
              <SquareStack className="w-4 h-4 mr-2" />
              <span>Histórico em Grade</span>
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
