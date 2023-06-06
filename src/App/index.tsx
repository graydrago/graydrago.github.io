import { Suspense } from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { Example } from './Example';
import { GenericError } from './GenericError';
import { MainBlock } from './MainBlock';

const META = import.meta.glob(
  `../../public/examples/*/meta.json`,
  { as: 'url', eager: true },
);

export function App() {
  const metaUrls = Object.values(META);

  return (
    <ErrorBoundary fallback={<GenericError />}>
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
    </ErrorBoundary>
  );
}
