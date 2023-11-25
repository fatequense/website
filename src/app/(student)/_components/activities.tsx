'use client'

import { CubeIcon } from '@radix-ui/react-icons'
import { CreateActivityForm } from '~/components/forms/create-activity-form'
import { useActivities } from '~/hooks/use-activities'

export function Activities() {
  const { data: activities } = useActivities()

  console.log(activities)

  if (!activities || activities?.length === 0)
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
      {activities?.map((activity) => (
        <div key={activity.id}>
          <p>{activity.title}</p>
          <p>{activity.description}</p>
        </div>
      ))}
    </div>
  )
}
