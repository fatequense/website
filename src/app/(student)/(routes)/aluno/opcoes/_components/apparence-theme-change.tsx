'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { useTheme } from 'next-themes'
import { Label } from '~/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'
import { cn } from '~/lib/utils'

export function ApparenceThemeChange() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Tema</CardTitle>
        <CardDescription>Selecione um tema</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue={resolvedTheme} onValueChange={setTheme}>
          <div className="flex flex-col sm:flex-row gap-6">
            <Label htmlFor="light" className="cursor-pointer text-center">
              <RadioGroupItem id="light" value="light" className="hidden" />
              <div
                className={cn(
                  'w-full sm:w-48 space-y-2 p-2 bg-[#ecedef] rounded-md ring-2 ring-offset-4 ring-secondary ring-offset-background',
                  resolvedTheme === 'light' && 'ring-primary',
                )}
              >
                <div className="bg-white space-y-1 p-2 rounded-md">
                  <div className="w-full h-2 bg-[#ecedef] rounded-md" />
                  <div className="w-9/12 h-2 bg-[#ecedef] rounded-md" />
                </div>
                <div className="flex bg-white gap-1 p-2 rounded-md">
                  <div className="w-5 aspect-square bg-[#ecedef] rounded-full" />
                  <div className="flex-1 space-y-1">
                    <div className="w-full h-2 bg-[#ecedef] rounded-md" />
                    <div className="w-9/12 h-2 bg-[#ecedef] rounded-md" />
                  </div>
                </div>
                <div className="bg-white space-y-1 p-2 rounded-md">
                  <div className="w-full h-2 bg-[#ecedef] rounded-md" />
                  <div className="w-9/12 h-2 bg-[#ecedef] rounded-md" />
                </div>
              </div>
              <span className="block mt-4 font-medium">Claro</span>
            </Label>
            <Label htmlFor="dark" className="cursor-pointer text-center">
              <RadioGroupItem id="dark" value="dark" className="hidden" />
              <div
                className={cn(
                  'w-full sm:w-48 space-y-2 p-2 bg-[#020617] rounded-md ring-2 ring-offset-4 ring-secondary ring-offset-background',
                  resolvedTheme === 'dark' && 'ring-primary',
                )}
              >
                <div className="bg-[#1e293b] space-y-1 p-2 rounded-md">
                  <div className="w-full h-2 bg-[#94a3b8] rounded-md" />
                  <div className="w-9/12 h-2 bg-[#94a3b8] rounded-md" />
                </div>
                <div className="flex bg-[#1e293b] gap-1 p-2 rounded-md">
                  <div className="w-5 aspect-square bg-[#94a3b8] rounded-full" />
                  <div className="flex-1 space-y-1">
                    <div className="w-full h-2 bg-[#94a3b8] rounded-md" />
                    <div className="w-9/12 h-2 bg-[#94a3b8] rounded-md" />
                  </div>
                </div>
                <div className="bg-[#1e293b] space-y-1 p-2 rounded-md">
                  <div className="w-full h-2 bg-[#94a3b8] rounded-md" />
                  <div className="w-9/12 h-2 bg-[#94a3b8] rounded-md" />
                </div>
              </div>
              <span className="block mt-4 font-medium">Escuro</span>
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
