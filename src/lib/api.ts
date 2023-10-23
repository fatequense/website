import { url } from './utils'

type Schema<TData> = { parse: (data: unknown) => TData }

export async function api<TData>(
  schema: Schema<TData>,
  route: string,
  options: RequestInit,
) {
  const response = await fetch(url(route), options)
  const data = await response.json()

  return schema.parse(data)
}
