import {
  CalendarDays,
  CircleDashed,
  GalleryVerticalEnd,
  Globe,
  LayoutGrid,
  Settings,
  SquareStack,
  Star,
  User,
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
  studentNav: [
    {
      label: 'Perfil',
      href: '/aluno/perfil',
      disabled: true,
      icon: User,
    },
    {
      label: 'Opções',
      href: '/aluno/opcoes',
      icon: Settings,
    },
    {
      label: 'SIGA',
      href: 'https://siga.cps.sp.gov.br/ALUNO/login.aspx',
      external: true,
      icon: Globe,
    },
  ],
}
