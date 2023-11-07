'use client'

import { PartyPopper } from 'lucide-react'
import { Skeleton } from '~/components/ui/skeleton'
import { useSchedule } from '~/hooks/use-schedule'

function formatHour(date: string) {
  return new Date(date).toLocaleTimeString('pt-BR', {
    timeStyle: 'short',
  })
}

export function TodaySchedule() {
  const { data: schedules } = useSchedule()

  const isLoading = !schedules

  const todayWeek = new Date().getDay()
  const todaySchedules = todayWeek > 0 ? schedules?.at(todayWeek - 1) : []
  const hasSchedules = !!todaySchedules && todaySchedules.length > 0

  if (isLoading) {
    return (
      <ol className="space-y-2">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Skeleton key={`schedule-skeleton-${idx}`} className="w-full h-12" />
        ))}
      </ol>
    )
  }

  return (
    <ol>
      {!hasSchedules && (
        <div className="flex flex-col items-center space-y-2">
          <div className="p-4 bg-blue-900/10 text-blue-600 rounded-md">
            <PartyPopper className="w-5 h-5" />
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">Sem aulas hoje</p>
            <p className="text-muted-foreground text-sm max-w-md">
              Parece que você não tem nenhuma aula hoje!
            </p>
          </div>
        </div>
      )}
      {hasSchedules &&
        todaySchedules.map((item, idx) => (
          <li key={`today-${idx}`} className="flex">
            <span className="text-muted-foreground text-xs">
              {formatHour(item.startsAt)}
            </span>
            <div className="ml-2 pl-4 pb-4 relative before:absolute before:z-10 before:w-2 before:h-2 before:contents-[''] before:bg-secondary before:rounded-full before:left-0 before:-translate-x-1/2 after:absolute after:contents-[''] after:h-full after:w-[0.125rem] after:bg-secondary after:left-0 after:top-0 after:-translate-x-1/2">
              <span className="text-xs text-muted-foreground">{item.cod}</span>
              <p className="text-sm">{item.discipline}</p>
            </div>
          </li>
        ))}
    </ol>
  )
}
