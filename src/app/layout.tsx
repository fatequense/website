import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import './globals.css'
import { ThemeProvider } from '~/components/providers/theme-provider'
import { sans } from './fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | Fatequense',
    default: 'Fatequense',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`antialiased ${sans.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
