import { ReactNode } from 'react'

import { Nav } from './_components/nav'
import { Footer } from './_components/footer'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex flex-col px-6">
      <Nav />

      {children}

      <Footer />
    </div>
  )
}
