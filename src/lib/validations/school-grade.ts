import z from 'zod'

export const schoolGradeSchema = z.array(
  z.object({
    semester: z.number(),
    disciplines: z.array(
      z.object({
        code: z.string(),
        name: z.string(),
        workload: z.number(),
        status: z.enum(['dismissed', 'approved', 'attending', 'not-attended']),
        period: z.number().optional(),
        frequency: z.number().optional(),
        grade: z.number().optional(),
      }),
    ),
  }),
)
