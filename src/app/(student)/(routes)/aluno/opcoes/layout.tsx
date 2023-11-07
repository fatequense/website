import { ReactNode } from 'react'
import { SidebarNav } from './_components/sidebar-nav'

export default function OptionsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="border-b pb-3">
        <h2 className="text-2xl font-bold">Opções</h2>
        <p className="text-muted-foreground">
          Gerencie sua conta de estudante e algumas configurações do site
        </p>
      </div>
      <div className="flex-1 flex flex-col md:flex-row gap-6 mt-6">
        <SidebarNav />

        {children}
      </div>
    </>
  )
}
