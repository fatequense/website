import {
  CalendarDays,
  CircleDashed,
  GalleryVerticalEnd,
  LayoutGrid,
  SquareStack,
  Star,
} from 'lucide-react'

export const dashboardConfig = {
  sidebarNav: [
    {
      label: 'Dashboard',
      href: '/aluno',
      icon: LayoutGrid,
    },
    {
      label: 'Faltas',
      href: '/aluno/faltas',
      icon: CircleDashed,
    },
    {
      label: 'Notas',
      href: '/aluno/notas',
      icon: Star,
    },
    {
      label: 'Horários',
      href: '/aluno/horarios',
      disabled: true,
      icon: CalendarDays,
    },
    {
      label: 'Histórico',
      href: '/aluno/historico',
      icon: GalleryVerticalEnd,
    },
    {
      label: 'Histórico em Grade',
      href: '/aluno/historico-grade',
      disabled: true,
      icon: SquareStack,
    },
  ],
}
