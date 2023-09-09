import { RouterProvider, createHashRouter } from 'react-router-dom';

import { ErrorBoundary } from 'components/ErrorBoundary';
import { GenericError } from 'components/GenericError';
import { NotFoundError } from 'components/NotFoundError';

import { ExamplesPage } from './Examples';
import { MathPage } from './Math';

const router = createHashRouter([
  {
    path: '/',
    errorElement: <GenericError />,
    element: <ExamplesPage />,
  },
  {
    path: '/math/*',
    errorElement: <GenericError />,
    element: <MathPage />,
  },
  {
    path: '*',
    element: <NotFoundError />,
  }
]);

export function App() {
  return (
    <ErrorBoundary fallback={<GenericError />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
