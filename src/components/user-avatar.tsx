'use client'

import { forwardRef } from 'react'
import { useSession } from 'next-auth/react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const UserAvatar = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ ...props }, ref) => {
  const { data } = useSession()

  const fallback = data?.user.name.substring(0, 2)

  return (
    <Avatar ref={ref} {...props}>
      <AvatarImage src={data?.user.picture} />
      <AvatarFallback>{fallback?.toUpperCase()}</AvatarFallback>
    </Avatar>
  )
})

UserAvatar.displayName = 'UserAvatar'
