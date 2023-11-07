import { useQuery } from '@tanstack/react-query'

import { api } from '~/lib/api'
import { getCurrentUser } from '~/lib/session'
import { schoolGradeSchema } from '~/lib/validations/school-grade'

export async function fetchSchoolGrade() {
  const user = await getCurrentUser()

  if (user === undefined) return null

  return await api(schoolGradeSchema, '/api/student/school-grade', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export function useSchoolGrade() {
  return useQuery({
    queryKey: ['school-grade'],
    queryFn: fetchSchoolGrade,
  })
}
