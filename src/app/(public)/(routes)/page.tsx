'use client'

import Link from 'next/link'

import { Button } from '~/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '~/config/site'

export default function LandingPage() {
  return (
    <main className="flex-1 flex flex-col justify-center space-y-6">
      <h1 className="max-w-3xl text-3xl font-bold leading-relaxed">
        {siteConfig.description}
      </h1>
      <Button className="w-fit" asChild>
        <Link href="/login">
          Entrar como estudante
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </main>
  )
}
