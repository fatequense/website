'use client'

import { useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function UserAvatar() {
  const { data } = useSession()

  const fallback = data?.user.name.substring(0, 2)

  return (
    <Avatar>
      <AvatarImage src={data?.user.picture} />
      <AvatarFallback>{fallback?.toUpperCase()}</AvatarFallback>
    </Avatar>
  )
}
