import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/SadS4ndWiCh.png" />
      <AvatarFallback>SA</AvatarFallback>
    </Avatar>
  )
}
