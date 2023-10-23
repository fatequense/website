import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import './globals.css'
import { sans } from './fonts'
import { Providers } from '../components/providers'

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
        <Providers>{children}</Providers>
        <Toaster richColors />
      </body>
    </html>
  )
}
