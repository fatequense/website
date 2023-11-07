import z from 'zod'

export const partialGradesSchema = z.array(
  z.object({
    cod: z.string(),
    disciplineName: z.string(),
    averageGrade: z.number(),
    examsDates: z.array(
      z.object({
        title: z.string(),
        startsAt: z.string(),
        grade: z.number(),
      }),
    ),
  }),
)
