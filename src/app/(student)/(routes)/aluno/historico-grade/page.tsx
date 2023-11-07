'use client'

import { cn } from '~/lib/utils'
import { DisciplineStatus } from '~/app/(student)/_components/discipline-status'
import { useSchoolGrade } from '~/hooks/use-school-grade'
import { Skeleton } from '~/components/ui/skeleton'

export default function HistoryGradePage() {
  const { data: schoolGrade } = useSchoolGrade()

  const isLoading = !schoolGrade

  return (
    <div className="grid grid-cols-[repeat(6,minmax(11rem,1fr))] gap-4 max-w-7xl overflow-x-auto xl:mx-auto">
      {isLoading && (
        <>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`skeleton-${i}`} className="flex flex-col gap-2">
              <Skeleton className="w-32 h-8 mx-auto" />
              <Skeleton className="w-[minmax(11rem,1fr)] h-44 mt-2" />
              <Skeleton className="w-[minmax(11rem,1fr)] h-44 mt-2" />
              <Skeleton className="w-[minmax(11rem,1fr)] h-44 mt-2" />
              <Skeleton className="w-[minmax(11rem,1fr)] h-44 mt-2" />
            </div>
          ))}
        </>
      )}

      {!isLoading &&
        schoolGrade?.map((grade) => (
          <div key={`semester-${grade.semester}`}>
            <p className="text-center">Semestre {grade.semester}</p>

            <ul className="mt-2 flex flex-col gap-2">
              {grade.disciplines.map((discipline) => (
                <li
                  key={discipline.code}
                  className={cn(
                    'p-2 border rounded-md h-44 text-xs',
                    discipline.status === 'approved' &&
                      'bg-green-900/5 border-green-400',
                    discipline.status === 'dismissed' &&
                      'bg-red-900/5 border-red-400',
                    discipline.status === 'attending' &&
                      'bg-yellow-900/5 border-yellow-400',
                    discipline.status === 'not-attended' &&
                      'text-muted-foreground',
                  )}
                >
                  <div className="flex justify-between gap-1">
                    <div>
                      <span>{discipline.code}</span>
                      <p className="xl:text-sm">{discipline.name}</p>
                    </div>
                    <DisciplineStatus status={discipline.status} />
                  </div>

                  {discipline.status === 'approved' && (
                    <div className="mt-2">
                      <p>
                        <span className="text-muted-foreground">
                          Frequência:{' '}
                        </span>
                        {discipline.frequency}%
                      </p>
                      <p>
                        <span className="text-muted-foreground">
                          Nota Final:{' '}
                        </span>
                        {discipline.grade}
                      </p>
                      <p>
                        <span className="text-muted-foreground">
                          Cursado em:{' '}
                        </span>
                        {discipline.period}
                      </p>
                      <p>
                        <span className="text-muted-foreground">
                          Carga Horária:{' '}
                        </span>
                        {discipline.workload}
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  )
}
