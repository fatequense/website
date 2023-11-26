'use client'

import { CubeIcon } from '@radix-ui/react-icons'
import { CreateActivityForm } from '~/components/forms/create-activity-form'
import { useActivities } from '~/hooks/use-activities'

function formatDateTime(datetime: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(datetime))
}

export function Activities() {
  const { data: activities } = useActivities()

  const pendingActivities = activities?.filter((activity) => {
    return new Date(activity.untilAt) > new Date()
  })

  if (
    !activities ||
    activities?.length === 0 ||
    pendingActivities?.length === 0
  )
    return (
      <div className="flex flex-col items-center space-y-2">
        <div className="p-4 bg-fuchsia-900/10 text-fuchsia-600 rounded-md">
          <CubeIcon className="w-5 h-5" />
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">Sem Atividades</p>
          <p className="text-muted-foreground text-sm max-w-md">
            Não há atividades no momento. Aproveite para relaxar ou adicione uma
            nova atividade se houver.
          </p>
        </div>

        <CreateActivityForm />
      </div>
    )

  return (
    <div>
      {pendingActivities?.map((activity) => (
        <div key={activity.id}>
          <p>{activity.title}</p>
          <p className="text-sm line-clamp-1">{activity.description}</p>

          <div className="flex items-center space-x-2 mt-1 text-sm text-muted-foreground">
            <span>{activity.disciplineCode}</span>
            <span>&bull;</span>
            <time>{formatDateTime(activity.untilAt)}</time>
          </div>
        </div>
      ))}
    </div>
  )
}
