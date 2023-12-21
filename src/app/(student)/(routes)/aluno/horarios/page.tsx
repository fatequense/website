'use client'

import { Skeleton } from '~/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { useSchedule } from '~/hooks/use-schedule'
import { Lesson, Schedule } from '~/lib/validations/schedule'

const WEEKDAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

type ScheduleHorary = Lesson & {
  weekday: number
}

function formatTime(datetime: string) {
  return Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
  }).format(new Date(datetime))
}

function tabulateSchedule(schedules: Schedule) {
  const horariesMap = new Map<string, ScheduleHorary[]>()

  schedules.forEach((schedule) => {
    schedule.forEach((lesson) => {
      const key = `${formatTime(lesson.startsAt)}-${formatTime(lesson.endsAt)}`
      const prevHoraries = horariesMap.get(key)
      const lessonHorary: ScheduleHorary = {
        ...lesson,
        weekday: new Date(lesson.startsAt).getDay(),
      }

      horariesMap.set(
        key,
        prevHoraries ? [...prevHoraries, lessonHorary] : [lessonHorary],
      )
    })
  })

  return Array.from(horariesMap).sort((a, b) => {
    const aStartTime = new Date(`2023/01/01 ${a[0].split('-')[0]}`)
    const bStartTime = new Date(`2023/01/01 ${b[0].split('-')[0]}`)

    return aStartTime < bStartTime ? -1 : 1
  })
}

export default function SchedulesPage() {
  const { data: schedule, isPending } = useSchedule()

  const tabulatedSchedule =
    !!schedule && schedule?.length > 0 ? tabulateSchedule(schedule) : []

  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(2,min-content)] gap-4">
      <div className="col-start-1 col-span-full row-start-1 row-span-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Horário</TableHead>
              {WEEKDAYS.map((weekday, i) => (
                <TableHead key={`week-${i}`}>{weekday}</TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {isPending &&
              Array.from({ length: 6 }).map((_, idx) => (
                <TableRow key={`skeleton-${idx}`}>
                  <TableCell>
                    <Skeleton className="h-5 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-20" />
                  </TableCell>
                </TableRow>
              ))}
            {tabulatedSchedule &&
              tabulatedSchedule.map((horary, y) => (
                <TableRow key={`${horary[0]}-${y}`}>
                  <TableCell>{horary[0]}</TableCell>

                  {Array.from({ length: 6 }, (_, x) => (
                    <TableCell key={`${horary[0]}-${x}${y}`}>
                      {
                        horary[1].find((lesson) => lesson.weekday - 1 === x)
                          ?.cod
                      }
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
