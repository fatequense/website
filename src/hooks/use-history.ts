import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/api'
import { getCurrentUser } from '~/lib/session'
import { historySchema } from '~/lib/validations/history'

export async function fetchHistory() {
  const user = await getCurrentUser()

  if (user === undefined) return null

  return await api(historySchema, '/api/student/history', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export function useHistory() {
  return useQuery({
    queryKey: ['history'],
    queryFn: fetchHistory,
  })
}
