'use client'

import { CubeIcon, PlusIcon } from '@radix-ui/react-icons'
import { CheckCheck, Flame, TrendingUp } from 'lucide-react'
import { useSession } from 'next-auth/react'

import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

const todayClasses = [
  { startsAt: '7:40', disciplineName: 'Laboratório de Banco de Dados' },
  { startsAt: '7:40', disciplineName: 'Laboratório de Banco de Dados' },
  { startsAt: '7:40', disciplineName: 'Laboratório de Banco de Dados' },
  { startsAt: '7:40', disciplineName: 'Laboratório de Banco de Dados' },
  { startsAt: '7:40', disciplineName: 'Laboratório de Banco de Dados' },
  { startsAt: '7:40', disciplineName: 'Laboratório de Banco de Dados' },
]

export default function StudentHome() {
  const { data } = useSession()

  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold">
        Bem vindo, {data?.user.name.split(' ', 2).join(' ')}!
      </h1>
      <div className="grid grid-cols-4 grid-rows-[min-content_min-content_min-content] gap-4 pt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Progressão (PP)</CardTitle>
            <Flame className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">57.14%</span>
            <p className="text-muted-foreground text-sm mt-2">
              Porcentagem de progressão do curso
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Rendimento (PR)</CardTitle>
            <TrendingUp className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">8.93</span>
            <p className="text-muted-foreground text-sm mt-2">
              Média do curso todo
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Cursados</CardTitle>
            <CheckCheck className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">4</span>
            <p className="text-muted-foreground text-sm mt-2">
              Semestres efetivamente cursados
            </p>
          </CardContent>
        </Card>

        <Card className="col-start-1 col-end-4 row-start-2">
          <CardHeader>
            <CardTitle className="text-sm">Atividades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 bg-fuchsia-900/10 text-fuchsia-600 rounded-md">
                <CubeIcon className="w-5 h-5" />
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">Sem Atividades</p>
                <p className="text-muted-foreground text-sm max-w-md">
                  Não há atividades no momento. Aproveite para relaxar ou
                  adicione uma nova atividade se houver.
                </p>
              </div>
              <Button>
                <PlusIcon className="w-4 h-4 mr-2" />
                Adicionar nova atividade
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="col-start-4 col-end-4 row-start-1 row-end-3">
          <CardHeader>
            <CardTitle className="text-sm">Aulas de hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <ol>
              {todayClasses.map((item, idx) => (
                <li
                  key={`today-${idx}`}
                  className="pl-4 pb-4 relative before:absolute before:w-2 before:h-2 before:contents-[''] before:bg-secondary before:rounded-full before:left-0 before:-translate-x-1/2 after:absolute after:contents-[''] after:h-full after:w-[0.125rem] after:bg-secondary after:left-0 after:top-0 after:-translate-x-1/2"
                >
                  <span className="text-muted-foreground text-xs">7:40</span>
                  <p className="text-sm">Laboratório de Banco de Dados</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
