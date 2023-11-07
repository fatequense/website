import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function url(route: string) {
  return new URL(route, process.env.NEXT_PUBLIC_API_BASE_URL)
}
