'use client'

import { CubeIcon, PlusIcon } from '@radix-ui/react-icons'
import { CheckCheck, Flame, TrendingUp } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Skeleton } from '~/components/ui/skeleton'
import { useProfile } from '~/hooks/use-profile'
import { TodaySchedule } from '../../_components/today-schedule'

export default function StudentHome() {
  const { data: profile } = useProfile()

  const isLoading = !profile

  return (
    <div className="h-full">
      {isLoading ? (
        <Skeleton className="w-40 h-8" />
      ) : (
        <h1 className="text-2xl font-bold">
          Bem vindo, {profile?.name.split(' ', 2).join(' ')}!
        </h1>
      )}

      <div className="flex flex-col gap-4 pt-4 md:grid md:grid-cols-4 md:grid-rows-[min-content_min-content_min-content]">
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Progressão (PP)</CardTitle>
                <Flame className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-bold">
                  {profile?.progression}%
                </span>
                <p className="text-muted-foreground text-sm mt-2">
                  Porcentagem de progressão do curso
                </p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Rendimento (PR)</CardTitle>
                <TrendingUp className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-bold">
                  {profile?.averageGrade}
                </span>
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
                <span className="text-2xl font-bold">
                  {profile?.semestersAttended}
                </span>
                <p className="text-muted-foreground text-sm mt-2">
                  Semestres efetivamente cursados
                </p>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="md:col-start-1 md:col-end-5 md:row-start-2 lg:col-end-4">
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
              <Button disabled>
                <PlusIcon className="w-4 h-4 mr-2" />
                Adicionar nova atividade
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-start-1 md:col-end-5 md:row-start-3 lg:col-start-4 lg:col-end-4 lg:row-start-1 lg:row-end-3">
          <CardHeader>
            <CardTitle className="text-sm">Aulas de hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <TodaySchedule />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
