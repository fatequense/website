import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import { Button } from '~/components/ui/button'

export default function LandingPage() {
  return (
    <main className="min-h-screen flex-1 flex flex-col justify-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-bold leading-relaxed">
          Seu Portal Acadêmico Pessoal
        </h1>
        <p className="max-w-lg text-lg sm:text-xl leading-relaxed text-muted-foreground">
          Controle seu horário, notas e frequência. Sucesso acadêmico
          descomplicado para fatequenses.
        </p>
      </div>
      <Button className="w-fit" asChild>
        <Link href="/login">
          Entrar como estudante
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </main>
  )
}
