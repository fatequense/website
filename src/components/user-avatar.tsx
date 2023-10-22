'use client'

import { forwardRef } from 'react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useProfile } from '~/hooks/use-profile'
import { Skeleton } from './ui/skeleton'
import { cn } from '~/lib/utils'

export const UserAvatar = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ ...props }, ref) => {
  const { isLoading, data: profile } = useProfile()

  if (isLoading)
    return (
      <Skeleton className={cn('w-10 h-10 rounded-full', props.className)} />
    )

  const fallback = profile?.name.substring(0, 2)

  return (
    <Avatar ref={ref} {...props}>
      <AvatarImage src={profile?.photoUrl} />
      <AvatarFallback>{fallback?.toUpperCase()}</AvatarFallback>
    </Avatar>
  )
})

UserAvatar.displayName = 'UserAvatar'
