import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/api'
import { getCurrentUser } from '~/lib/session'
import { scheduleSchema } from '~/lib/validations/schedule'

export async function fetchSchedule() {
  const user = await getCurrentUser()

  if (user === undefined) return null

  return await api(scheduleSchema, '/api/student/schedule', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export function useSchedule() {
  return useQuery({
    queryKey: ['schedules'],
    queryFn: fetchSchedule,
  })
}
