type Schema<TData> = { parse: (data: unknown) => TData }

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function api<TData>(
  schema: Schema<TData>,
  route: string,
  options: RequestInit,
) {
  const response = await fetch(new URL(route, BASE_URL), options)
  const data = await response.json()

  return schema.parse(data)
}
