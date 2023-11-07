import z from 'zod'

export const authSchema = z.object({
  username: z
    .string({ required_error: 'O usuário é obrigatório' })
    .length(11, 'A usuário deve conter 11 caracteres'),
  password: z
    .string({ required_error: 'A senha é obrigatória' })
    .min(1, 'A senha deve ser preenchida'),
})

export type Auth = z.infer<typeof authSchema>

export const loginResponseSchema = z.object({
  token: z.string(),
})
