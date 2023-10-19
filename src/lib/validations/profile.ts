import z from 'zod'

export const profileSchema = z.object({
  name: z
    .string()
    .trim()
    .transform((name) =>
      name.toLowerCase().replace(/(^|\s)\S/g, (char) => char.toUpperCase()),
    ),
  ra: z.string(),
  personalEmail: z.string().email(),
  institutionalEmail: z.string().email(),
  birthday: z.string(),
  averageGrade: z.number(),
  progression: z.number(),
  semestersAttended: z.number(),
  currentSemester: z.number(),
  photoUrl: z.string().url(),
  college: z.object({
    name: z.string(),
    courseName: z.string(),
    coursePeriod: z.string(),
    state: z.string(),
  }),
})
