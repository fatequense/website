'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { useProfile } from '~/hooks/use-profile'
import { UpdateAvatarForm } from '../../_components/update-avatar-form'

export default function OptionsProfile() {
  const { data: profile } = useProfile()

  return (
    <div className="flex-1 space-y-3">
      <div className="border-b pb-3">
        <h2 className="text-xl font-bold">Perfil</h2>
        <p className="text-sm text-muted-foreground">
          Gerêncie algumas opções de perfil, lembrando que essas alterações não
          são refletidas no site do SIGA
        </p>
      </div>

      <UpdateAvatarForm profile={profile} />

      <Card>
        <CardHeader>
          <CardTitle>RA</CardTitle>
          <CardDescription>Seu Registro Acadêmico único</CardDescription>
        </CardHeader>
        <CardContent>
          <Input defaultValue={profile?.ra} readOnly />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Email Instituicional</CardTitle>
          <CardDescription>
            Seu email institucional oferecido pela Fatec
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input defaultValue={profile?.institutionalEmail} readOnly />
        </CardContent>
      </Card>
    </div>
  )
}
