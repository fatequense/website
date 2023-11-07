import { z } from 'zod'

export const historySchema = z.array(
  z.object({
    cod: z.string(),
    disciplineName: z.string(),
    description: z.string(),
    finalGrade: z.number(),
    totalAbsences: z.number(),
    presenceFrequency: z.number(),
    renunciationAt: z.string().nullable(),
    isApproved: z.boolean(),
  }),
)
