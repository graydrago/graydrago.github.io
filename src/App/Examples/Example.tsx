import useSWR from 'swr';
import { dirname, getMeta } from 'utils';

import css from './styles.module.css';

const PREVIEW_IMG_NAME = 'preview.png';

interface ExampleProps {
  metaUrl: string;
  headerComponent?: React.ComponentType<{ children?: React.ReactNode }> | string;
}

export function Example({
  metaUrl,
  headerComponent = 'h1',
}: ExampleProps) {
  const { data } = useSWR(metaUrl, getMeta, { suspense: true });
  const Header = headerComponent;
  const urlRoot = dirname(metaUrl);
  const previewImageUrl = `${urlRoot}/${PREVIEW_IMG_NAME}`;

  return (
    <article>
      <Header>{data.title}</Header>
      <p>{data.description}</p>
      <p><img className={css.preview} src={previewImageUrl} /></p>
      <p><a href={data.onlineExample}>Online example</a></p>
      <p><a href={data.sourceCode}>Source code</a></p>
    </article>
  );
}
