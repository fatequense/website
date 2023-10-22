'use client'

import { useMemo } from 'react'

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '~/components/ui/table'
import { usePartialGrades } from '~/hooks/use-partial-grade'

export default function GradesPage() {
  const { data: partialGrades } = usePartialGrades()

  const _partialGrades = useMemo(() => {
    return partialGrades?.map((grade) => {
      if (grade.examsDates.length > 0)
        return {
          ...grade,
          examsDates: grade.examsDates.sort((a, b) =>
            a.title > b.title ? 1 : -1,
          ),
        }

      return {
        ...grade,
        examsDates: [null, null, null],
      }
    })
  }, [partialGrades])

  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(2,min-content)] gap-4">
      <div className="col-start-1 col-span-full row-start-1 row-span-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Disciplina</TableHead>
              <TableHead className="text-center">P1</TableHead>
              <TableHead className="text-center">P2</TableHead>
              <TableHead className="text-center">P3</TableHead>
              <TableHead className="text-center">Média</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {_partialGrades?.map((grade, idx) => (
              <TableRow key={`grades-${idx}`}>
                <TableCell>{grade.cod}</TableCell>
                <TableCell>{grade.disciplineName}</TableCell>
                {grade.examsDates.map((exam, i) => (
                  <TableCell key={`${grade.cod}-${i}`} className="text-center">
                    {exam ? exam.grade : '-'}
                  </TableCell>
                ))}
                <TableCell className="text-center">
                  {grade.averageGrade}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
