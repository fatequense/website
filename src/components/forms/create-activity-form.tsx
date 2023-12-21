'use client'

import { Loader, PlusIcon } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '../ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '../ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { newActivitySchema } from '~/lib/validations/activity'
import { Input } from '../ui/input'
import { useSession } from 'next-auth/react'
import { url } from '~/lib/utils'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'
import { Label } from '../ui/label'

const newActivityFormSchema = newActivitySchema.omit({
  studentId: true,
  isCompleted: true,
})
type NewActivityForm = z.infer<typeof newActivityFormSchema>

export function CreateActivityForm() {
  const { data: session } = useSession()

  const { handleSubmit, ...form } = useForm<NewActivityForm>({
    resolver: zodResolver(newActivityFormSchema),
  })

  const { mutate: createActivity, isPending } = useMutation({
    mutationFn: async (data: NewActivityForm) => {
      Object.assign(data, {
        isCompleted: false,
        studentId: session?.user.ra,
        untilAt: new Date(data.untilAt).toISOString(),
      })
      const newActivity = newActivitySchema.parse(data)

      console.log(JSON.stringify(newActivity))

      const res = await fetch(url('/api/student/activities/new'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
        body: JSON.stringify(newActivity),
      })

      if (!res.ok) throw new Error()
    },
    onSuccess: () => {
      toast.success('Atividade criada com sucesso!')
    },
    onError: () => {
      toast.error('Alguma coisa deu errado!', {
        description: 'Não foi possível criar a atividade.',
      })
    },
  })

  function onSubmit(data: NewActivityForm) {
    createActivity(data)
  }

  return (
    <Dialog onOpenChange={(wasClosed) => !wasClosed && form.reset()}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="w-4 h-4 mr-2" />
          Adicionar nova atividade
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Atividade</DialogTitle>
          <DialogDescription>
            Adiciona uma atividade para não esquecer
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit((data) => createActivity(data))}
          className="space-y-2"
        >
          <div className="space-y-1">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              placeholder="ex. Lição de Matemática"
              {...form.register('title')}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="description">Descrição</Label>
            <Input
              id="description"
              placeholder="ex. Resolver os exercícios da lista"
              {...form.register('description')}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="untilAt">Prazo de Entraga</Label>
            <Input
              id="untilAt"
              type="datetime-local"
              {...form.register('untilAt')}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="disciplineId">Disciplina</Label>
            <Input
              id="disciplineId"
              placeholder="ex. IBD100"
              {...form.register('disciplineCode')}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mt-4">
              <DialogClose asChild>
                <Button variant="ghost">Cancelar</Button>
              </DialogClose>

              <Button type="submit">
                {isPending && <Loader className="w-4 h-4 animate-spin" />}
                {!isPending && <span>Adicionar atividade</span>}
              </Button>
            </div>
          </div>
        </form>
        {/* <Form {...form}>
          <form onSubmit={form.handleSubmit(console.log)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="ex. Lição de Matemática" {...field} />
                  </FormControl>
                  <FormDescription>Título da atividade</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex. Resolver os exercícios da lista"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Detalhes sobre a atividade</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="untilAt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prazo de Entraga</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormDescription>
                    Data da entrega da atividade
                  </FormDescription>
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between mt-4">
              <DialogClose asChild>
                <Button variant="ghost">Cancelar</Button>
              </DialogClose>

              <Button type="submit" disabled={isPending}>
                {isPending && <Loader className="w-4 h-4 animate-spin" />}
                {!isPending && <span>Adicionar atividade</span>}
              </Button>
            </div>
          </form>
        </Form> */}
      </DialogContent>
    </Dialog>
  )
}
