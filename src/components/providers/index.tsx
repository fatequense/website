'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

import { ThemeProvider } from './theme-provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}
