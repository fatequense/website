'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const formSchema = z.object({
  username: z
    .string({ required_error: 'O usuário é obrigatório' })
    .length(11, 'A usuário deve conter 11 caracteres'),
  password: z
    .string({ required_error: 'A senha é obrigatória' })
    .min(1, 'A senha deve ser preenchida'),
})

export function AuthForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuário</FormLabel>
              <FormControl>
                <Input placeholder="ex. 00000000000" {...field} />
              </FormControl>
              <FormDescription>
                Seu usuário do SIGA que é seu CPF
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="**********" {...field} />
              </FormControl>
              <FormDescription>Sua senha super segura</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full mt-6">
          <span>Entrar com o SIGA</span>
        </Button>
      </form>
    </Form>
  )
}
