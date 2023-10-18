'use client'

import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const Icon = theme === 'light' ? MoonIcon : SunIcon

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icon className="w-4 h-4" />
    </Button>
  )
}
