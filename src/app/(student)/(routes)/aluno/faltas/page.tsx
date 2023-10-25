'use client'

import { useMemo } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card'
import { usePartialAbsences } from '~/hooks/use-absences'
import { Skeleton } from '~/components/ui/skeleton'

export default function AbsencesPage() {
  const { data: partialAbsences } = usePartialAbsences()

  const isLoading = !partialAbsences

  const totalAbsences = useMemo(() => {
    return partialAbsences?.reduce(
      (total, curr) => curr.totalAbsences + total,
      0,
    )
  }, [partialAbsences])

  const greaterAbsence = useMemo(() => {
    return partialAbsences?.reduce(
      (greater, curr) =>
        curr.totalAbsences > greater ? curr.totalAbsences : greater,
      0,
    )
  }, [partialAbsences])

  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(2,min-content)] gap-4">
      <Card className="col-start-1 col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm">Total de Faltas</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-7 w-10" />
          ) : (
            <span className="text-2xl font-bold">{totalAbsences}</span>
          )}
        </CardContent>
      </Card>
      <Card className="col-start-3 col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm">Maior falta</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-7 w-10" />
          ) : (
            <span className="text-2xl font-bold">{greaterAbsence}</span>
          )}
        </CardContent>
      </Card>

      <div className="col-span-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Disciplina</TableHead>
              <TableHead className="text-center">Faltas</TableHead>
              <TableHead className="text-center">Presenças</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading &&
              Array.from({ length: 6 }).map((_, idx) => (
                <TableRow key={`skeleton-${idx}`}>
                  <TableCell>
                    <Skeleton className="h-5 w-16" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-64" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-5 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-5 mx-auto" />
                  </TableCell>
                </TableRow>
              ))}
            {!isLoading &&
              partialAbsences?.map((absences, idx) => (
                <TableRow key={`absences-${idx}`}>
                  <TableCell>{absences.cod}</TableCell>
                  <TableCell>{absences.disciplineName}</TableCell>
                  <TableCell className="text-center">
                    {absences.totalAbsences}
                  </TableCell>
                  <TableCell className="text-center">
                    {absences.totalPresences}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
