'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { partialAbsences } from './temp'
import { useMemo } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card'

export default function AbsencesPage() {
  const totalAbsences = useMemo(() => {
    return partialAbsences.reduce(
      (total, curr) => curr.totalAbsences + total,
      0,
    )
  }, [])

  const greaterAbsence = useMemo(() => {
    return partialAbsences.reduce(
      (greater, curr) =>
        curr.totalAbsences > greater ? curr.totalAbsences : greater,
      0,
    )
  }, [])

  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(2,min-content)] gap-4">
      <Card className="col-start-1 col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm">Total de Faltas</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-2xl font-bold">{totalAbsences}</span>
        </CardContent>
      </Card>
      <Card className="col-start-3 col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm">Maior falta</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-2xl font-bold">{greaterAbsence}</span>
        </CardContent>
      </Card>

      <Card className="col-start-1 col-end-5 row-start-2 row-span-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm">Faltas parciais</CardTitle>
        </CardHeader>
        <CardContent>
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
              {partialAbsences.map((absences, idx) => (
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
        </CardContent>
      </Card>
    </div>
  )
}
