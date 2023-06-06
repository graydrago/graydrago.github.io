export function dirname(path: string) {
  const lastIndex = path.lastIndexOf('/')
  if (lastIndex < 0) {
    return '/';
  }
  return path.slice(0, lastIndex);
}
