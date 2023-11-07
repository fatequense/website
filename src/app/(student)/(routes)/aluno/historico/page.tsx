'use client'

import { z } from 'zod'

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '~/components/ui/table'
import { useHistory } from '~/hooks/use-history'
import { Skeleton } from '~/components/ui/skeleton'
import { historySchema } from '~/lib/validations/history'
import { DisciplineStatus } from '~/app/(student)/_components/discipline-status'

export default function HistoryPage() {
  const { data: completeHistory } = useHistory()

  const isLoading = !completeHistory

  function getHistoryStatus(history: z.infer<typeof historySchema>[number]) {
    return history.isApproved
      ? 'approved'
      : !history.isApproved && history.description !== 'Em Curso'
      ? 'dismissed'
      : history.description === 'Em Curso'
      ? 'attending'
      : 'not-attended'
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Código</TableHead>
          <TableHead>Disciplina</TableHead>
          <TableHead className="text-center">Média</TableHead>
          <TableHead className="text-center">Aprovado</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isLoading &&
          Array.from({ length: 10 }).map((_, idx) => (
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
          completeHistory?.map((history) => (
            <TableRow key={history.cod}>
              <TableCell>{history.cod}</TableCell>
              <TableCell>{history.disciplineName}</TableCell>
              <TableCell className="text-center">
                {history.finalGrade}
              </TableCell>
              <TableCell className="flex justify-center">
                <DisciplineStatus status={getHistoryStatus(history)} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}
