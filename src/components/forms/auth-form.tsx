'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
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
import { Auth, authSchema } from '~/lib/validations/auth'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'

export function AuthForm() {
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const form = useForm<Auth>({
    resolver: zodResolver(authSchema),
  })

  async function handleSubmit(data: Auth) {
    setLoading(true)

    try {
      const signInResult = await signIn('credentials', {
        ...data,
        redirect: false,
        callbackUrl: searchParams?.get('from') || '/aluno',
      })

      if (!signInResult?.ok) {
        toast.error('Alguma coisa deu errado!', {
          description: 'Não foi possível realizar o login. Tente novamente',
        })
      } else {
        router.replace(searchParams?.get('from') || '/aluno')
      }
    } catch {
      toast.error('Alguma coisa deu errado!', {
        description: 'Não foi possível realizar o login. Tente novamente',
      })
    } finally {
      setLoading(false)
    }
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

        <Button className="w-full mt-6" disabled={loading}>
          {loading && <Loader className="w-4 h-4 animate-spin" />}
          {!loading && <span>Entrar com o SIGA</span>}
        </Button>
      </form>
    </Form>
  )
}
