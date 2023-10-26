import { ApparenceThemeChange } from '../../_components/apparence-theme-change'

export default function OptionsProfile() {
  return (
    <div className="flex-1 space-y-3">
      <div className="border-b pb-3">
        <h2 className="text-xl font-bold">Aparência</h2>
        <p className="text-sm text-muted-foreground">
          Customize a aparência do Fatequense. O tema é trocado automaticamente
          entre claro e escuro.
        </p>
      </div>

      <ApparenceThemeChange />
    </div>
  )
}
