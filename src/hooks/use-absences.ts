import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/api'
import { getCurrentUser } from '~/lib/session'
import { partialAbsencesSchema } from '~/lib/validations/partial-absences'

export async function fetchPartialAbsences() {
  const user = await getCurrentUser()

  if (user === undefined) return null

  return await api(partialAbsencesSchema, '/api/student/partial-absences', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export function usePartialAbsences() {
  return useQuery({
    queryKey: ['partial-absences'],
    queryFn: fetchPartialAbsences,
  })
}
