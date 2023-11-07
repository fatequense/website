import { ReactNode } from 'react'
import { Nav } from './_components/nav'

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 flex flex-col px-4 pb-4">{children}</main>
    </div>
  )
}
