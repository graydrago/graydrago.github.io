import { Suspense } from 'react';

import { MainBlock } from 'components/MainBlock';
import { MainListBlock } from 'components/MainListBlock';
import { META } from 'virtual:meta-list';

import { Example } from '../Example';

export function ExamplesPage() {
  const metaUrls = Object.values(META);

  return (
    <MainListBlock>
      <MainBlock>
        <h1>Online Examples</h1>
      </MainBlock>
      <Suspense>
        {metaUrls.map((metaUrl) => (
          <MainBlock key={metaUrl}>
            <Example
              headerComponent="h2"
              metaUrl={metaUrl}
            />
          </MainBlock>
        ))}
      </Suspense>
    </MainListBlock>
  );
}
