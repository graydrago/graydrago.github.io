import { Suspense } from 'react';
import { META } from 'virtual:meta-list';

import { ErrorBoundary } from './ErrorBoundary';
import { Example } from './Example';
import { GenericError } from './GenericError';
import { MainBlock } from './MainBlock';

import css from './styles.module.css';

export function App() {
  const metaUrls = Object.values(META);

  return (
    <ErrorBoundary fallback={<GenericError />}>
      <main className={css.main}>
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
      </main>
    </ErrorBoundary>
  );
}
