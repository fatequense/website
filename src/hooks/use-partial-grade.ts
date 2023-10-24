import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/api'
import { getCurrentUser } from '~/lib/session'
import { partialGradesSchema } from '~/lib/validations/partial-grades'

export async function fetchPartialGrade() {
  const user = await getCurrentUser()

  if (user === undefined) return null

  return await api(partialGradesSchema, '/api/student/partial-grades', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export function usePartialGrades() {
  return useQuery({
    queryKey: ['partial-grades'],
    queryFn: fetchPartialGrade,
  })
}
