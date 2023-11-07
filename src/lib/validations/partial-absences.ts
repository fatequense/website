import z from 'zod'

export const partialAbsencesSchema = z.array(
  z.object({
    cod: z.string().trim(),
    disciplineName: z.string(),
    totalPresences: z.number(),
    totalAbsences: z.number(),
    lessons: z.array(
      z.object({
        title: z.string(),
        date: z.string().nullable(),
        presences: z.number(),
        absences: z.number(),
      }),
    ),
  }),
)
