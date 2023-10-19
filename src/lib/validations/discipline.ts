import z from 'zod'

export const disciplineSchema = z.object({
  name: z.string(),
  code: z.string(),
  class: z.string(),
  teacherName: z
    .string()
    .transform((teacherName) =>
      teacherName
        .toLowerCase()
        .replace(/(^|\s)\S/g, (char) => char.toUpperCase()),
    ),
  workload: z.number(),
  totalAbsencesAllowed: z.number(),
})
