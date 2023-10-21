import { Check, Hourglass, X } from 'lucide-react'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '~/components/ui/table'
import { cn } from '~/lib/utils'
import { completeHistory } from './temp'

export default function HistoryPage() {
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
        {completeHistory.map((history) => (
          <TableRow key={history.cod}>
            <TableCell>{history.cod}</TableCell>
            <TableCell>{history.disciplineName}</TableCell>
            <TableCell className="text-center">{history.finalGrade}</TableCell>
            <TableCell>
              <div
                className={cn(
                  'mx-auto p-1 w-fit rounded-full',
                  history.isApproved && 'bg-green-900/10 text-green-400',
                  !history.isApproved &&
                    history.description !== 'Em Curso' &&
                    'bg-red-900/10 text-red-400',
                  history.description === 'Em Curso' &&
                    'bg-yellow-900/10 text-yellow-400',
                )}
                aria-label={history.isApproved ? 'Aprovado' : 'Reprovado'}
              >
                {history.isApproved ? (
                  <Check className="w-4 h-4" />
                ) : history.description === 'Em Curso' ? (
                  <Hourglass className="w-4 h-4" />
                ) : (
                  <X className="w-4 h-4" />
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
