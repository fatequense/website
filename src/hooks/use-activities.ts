import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/api'
import { getCurrentUser } from '~/lib/session'
import { activitiesSchema } from '~/lib/validations/activity'

export async function fetchActivity() {
  const user = await getCurrentUser()

  if (user === undefined) return null

  return await api(activitiesSchema, '/api/student/activities', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export function useActivities() {
  return useQuery({
    queryKey: ['activities'],
    queryFn: fetchActivity,
  })
}
