import { Input } from "@/shared/components/ui/Input"
import { Label } from "@/shared/components/ui/Label/label"
import { HTMLInputTypeAttribute } from "react"

export function InputWithLabel({
  label,
  placeholder,
  type,
  id,
}: {
  label: string
  placeholder: string
  type: HTMLInputTypeAttribute
  id: string
}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  )
}
