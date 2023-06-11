import useSWR from 'swr';
import { dirname, getMeta } from 'utils';

import css from './styles.module.css';

interface ExampleProps {
  metaUrl: string;
  headerComponent?: React.ComponentType<{ children?: React.ReactNode }> | string;
}

export function Example(props: ExampleProps) {
  const { data } = useSWR(props.metaUrl, getMeta, { suspense: true });
  const Header = props.headerComponent || 'h1';
  const urlRoot = dirname(props.metaUrl);
  const onlineExampleUrl = `${urlRoot}/dist/index.html`;
  const previewImageUrl = `${urlRoot}/preview.png`;

  return (
    <article>
      <Header>{data.title}</Header>
      <p>{data.description}</p>
      <p><img className={css.preview} src={previewImageUrl} /></p>
      <p><a href={onlineExampleUrl}>Online example</a></p>
      <p><a href={data.sourceCode}>Source code</a></p>
    </article>
  );
}
