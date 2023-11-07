import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'

const WEEKDAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export default function SchedulesPage() {
  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(2,min-content)] gap-4">
      <div className="col-start-1 col-span-full row-start-1 row-span-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Horário</TableHead>
              {WEEKDAYS.map((weekday, i) => (
                <TableHead key={`week-${i}`}>{weekday}</TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody></TableBody>
        </Table>
      </div>
    </div>
  )
}
