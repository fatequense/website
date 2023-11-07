import z from 'zod'

export const scheduleSchema = z.array(
  z.array(
    z.object({
      cod: z.string().length(6),
      discipline: z.string().optional(),
      startsAt: z.string(),
      endsAt: z.string(),
    }),
  ),
)
