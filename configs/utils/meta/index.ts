import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';

import { Meta } from 'types/index';

function readJson(path: string): Meta {
  const data = readFileSync(path, { encoding: 'utf8', flag: 'r' });
  return JSON.parse(data);
}

export function metaListPlugin({ publicDir }: { publicDir: string }) {
  const name = 'virtual:meta-list';
  const examplesDir = './examples';
  const files = readdirSync(resolve(publicDir, examplesDir))
    .map((dir) => {
      const path = `${examplesDir}/${dir}/meta.json`;
      const { ordering } = readJson(resolve(publicDir, path));
      return { ordering, path };
    })
    .sort((a, b) => a.ordering - b.ordering)
    .map((item) => item.path);
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
