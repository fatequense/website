import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/api'
import { getCurrentUser } from '~/lib/session'
import { profileSchema } from '~/lib/validations/profile'

export async function fetchProfile() {
  const user = await getCurrentUser()

  if (user === undefined) return null

  return await api(profileSchema, '/api/student/profile', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  })
}
