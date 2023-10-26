'use client'
import { useTheme } from 'next-themes'

import { useMounted } from '~/hooks/use-mounted'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Label } from '~/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'

export function ApparenceThemeChange() {
  const { setTheme, resolvedTheme } = useTheme()
  const isMounted = useMounted()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Tema</CardTitle>
        <CardDescription>Selecione um tema</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue={resolvedTheme} onValueChange={setTheme}>
          <div className="flex flex-col sm:flex-row gap-6">
            <Label
              htmlFor="light"
              className="cursor-pointer text-center [&:has([data-state=checked])>div]:border-primary"
            >
              {isMounted && (
                <RadioGroupItem id="light" value="light" className="sr-only" />
              )}
              <div className="w-full sm:w-48 space-y-2 p-2 bg-[#ecedef] rounded-md border-2">
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
            <Label
              htmlFor="dark"
              className="cursor-pointer text-center [&:has([data-state=checked])>div]:border-primary"
            >
              {isMounted && (
                <RadioGroupItem id="dark" value="dark" className="sr-only" />
              )}
              <div className="w-full sm:w-48 space-y-2 p-2 bg-[#020617] rounded-md border-2">
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
