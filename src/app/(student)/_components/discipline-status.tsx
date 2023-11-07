import { Check, Hourglass, X } from 'lucide-react'
import { cn } from '~/lib/utils'

type StatusProps = {
  status: string
}

export function DisciplineStatus({ status }: StatusProps) {
  return (
    <div
      className={cn(
        'p-1 w-fit h-fit rounded-full bg-muted text-muted-foreground',
        status === 'approved' && 'bg-green-900/10 text-green-400',
        status === 'dismissed' && 'bg-red-900/10 text-red-400',
        status === 'attending' && 'bg-yellow-900/10 text-yellow-400',
      )}
      aria-label={status === 'approved' ? 'Aprovado' : 'Reprovado'}
    >
      {status === 'approved' ? (
        <Check className="w-4 h-4" />
      ) : status === 'attending' ? (
        <Hourglass className="w-4 h-4" />
      ) : (
        <X className="w-4 h-4" />
      )}
    </div>
  )
}
