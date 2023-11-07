'use client'

import z from 'zod'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Button } from '~/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

import { profileSchema } from '~/lib/validations/profile'
import { url } from '~/lib/utils'

const updateAvatarSchema = z.object({
  avatarUrl: z.string().url().optional(),
})

type UpdateAvatar = z.infer<typeof updateAvatarSchema>

type Props = {
  profile?: z.infer<typeof profileSchema> | null
}

export function UpdateAvatarForm({ profile }: Props) {
  const { data, update: updateSession } = useSession()
  const queryClient = useQueryClient()

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: async (payload: UpdateAvatar) => {
      const response = await fetch(url('/api/student/profile/update'), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data?.user.accessToken}`,
        },
        body: JSON.stringify({
          avatarUrl: payload.avatarUrl,
        }),
      })

      if (!response.ok) throw new Error('Unable to update profile')
    },
    onSuccess: async (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      updateSession({ picture: variables.avatarUrl })

      toast.success('Foto de perfil atualizada com sucesso!')
    },
    onError: async () => {
      toast.error('Não foi possível alterar a foto de perfil. Tente novamente.')
    },
  })

  const { register, handleSubmit } = useForm<UpdateAvatar>({
    resolver: zodResolver(updateAvatarSchema),
    defaultValues: {
      avatarUrl: profile?.avatarUrl ?? '',
    },
  })

  return (
    <form onSubmit={handleSubmit((data) => updateProfile(data))}>
      <Card>
        <CardHeader>
          <CardTitle>Foto de perfil</CardTitle>
          <CardDescription>
            Coloque uma URL válida de uma imagem para servir como foto de perfil
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label className="sr-only" htmlFor="avatarUrl">
            Foto de perfil
          </Label>
          <Input
            id="avatarUrl"
            type="url"
            placeholder="ex. https://github.com/usuario.png"
            {...register('avatarUrl')}
          />
        </CardContent>
        <CardFooter className="border-t p-6">
          <Button type="submit" disabled={isPending || !profile}>
            {isPending && <Loader className="w-4 h-4 mr-2 animate-spin" />}

            <span>Salvar</span>
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
