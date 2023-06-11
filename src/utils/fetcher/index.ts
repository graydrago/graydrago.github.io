import { Meta } from 'types';

export async function fetcher<R>(endpoint: string): Promise<R> {
  const v = await fetch(endpoint);
  return await v.json();
}

export async function getMeta(endpoint: string): Promise<Meta> {
  return fetcher<Meta>(endpoint);
}
