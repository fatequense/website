import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { AuthForm } from '~/components/forms/auth-form'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '~/components/ui/card'

export default function LoginPage() {
  return (
    <div className="grid h-screen md:grid-cols-2">
      <div className="relative bg-muted">
        <Image
          src="/images/fatecimagem.webp"
          alt="Imagem de uma instituição da Fatec"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 contents-[''] bg-gradient-to-b from-background/50 to-background" />

        <Link
          href="/"
          className="absolute top-4 left-4 flex items-center space-x-2"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Voltar
        </Link>

        <small className="absolute bottom-4 left-4 text-sm text-muted-foreground">
          Foto por{' '}
          <a
            href="https://www.saopaulo.sp.gov.br"
            className="hover:underline hover:underline-offset-2 hover:text-foreground"
          >
            Governo do Estado de São Paulo
          </a>{' '}
          em{' '}
          <a
            href="https://www.saopaulo.sp.gov.br/ultimas-noticias/fatecs-mais-de-82-mil-alunos-e-73-cursos-de-graduacao-tecnologica/"
            className="hover:underline hover:underline-offset-2 hover:text-foreground"
          >
            Notícia
          </a>
        </small>
      </div>

      <main className="absolute inset-0 md:static flex flex-col items-center justify-center gap-4 px-4 md:px-0">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Bem vindo de volta</CardTitle>
            <CardDescription>
              Entre com sua conta do SIGA para ver suas informações de estudante
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AuthForm />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
