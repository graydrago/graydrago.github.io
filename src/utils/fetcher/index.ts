export async function fetcher<R>(endpoint: string): Promise<R> {
  const v = await fetch(endpoint);
  return await v.json();
}
