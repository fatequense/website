'use client'

import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { useProfile } from '~/hooks/use-profile'

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

      <Card>
        <CardHeader>
          <CardTitle>Foto de perfil</CardTitle>
          <CardDescription>
            Coloque uma URL válida de uma imagem para servir como foto de perfil
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            defaultValue={profile?.photoUrl}
            placeholder="ex. https://github.com/usuario.png"
          />
        </CardContent>
        <CardFooter className="border-t p-6">
          <Button>Salvar</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>RA</CardTitle>
          <CardDescription>Seu Registro Acadêmico único</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            defaultValue={profile?.ra}
            readOnly
            className="text-muted-foreground"
          />
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
          <Input
            defaultValue={profile?.institutionalEmail}
            readOnly
            className="text-muted-foreground"
          />
        </CardContent>
      </Card>
    </div>
  )
}
