import { z } from 'zod'

export const activitySchema = z.object({
  id: z.string().length(36),
  studentId: z.string().length(13),
  disciplineCode: z.string().length(6),
  title: z.string().min(1).max(64),
  description: z.string().min(1).max(255),
  untilAt: z.string(),
  isCompleted: z.boolean(),
})

export const activitiesSchema = z.array(activitySchema)

export const newActivitySchema = activitySchema.omit({
  id: true,
})

export const deleteActivitySchema = activitySchema.pick({
  id: true,
})
