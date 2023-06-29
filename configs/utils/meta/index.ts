import { readdirSync } from 'fs';
import { resolve } from 'path';

export function metaListPlugin({ publicDir }: { publicDir: string }) {
  const name = 'virtual:meta-list';
  const examplesDir = './examples';
  const files = readdirSync(resolve(publicDir, examplesDir))
    .map((dir) => `${examplesDir}/${dir}/meta.json`);
  const json = JSON.stringify(files);
  const loadPayload = {
    code: `export const META = ${json};`,
    map: null,
  };

  return {
    name,
    resolveId(id: string) {
      return id === name ? name : undefined;
    },
    load(id: string) {
      return id === name ? loadPayload : undefined;
    },
  };
}
