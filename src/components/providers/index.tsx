'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

import { ThemeProvider } from './theme-provider'
import { QueryProvider } from './query-provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <QueryProvider>{children}</QueryProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
