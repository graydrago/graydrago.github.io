import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  ErrorBoundary,
  GenericError,
  NotFoundError,
} from 'components';

import { ExamplesPage } from './Examples';
import { MathPage } from './Math';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <GenericError />,
    element: <ExamplesPage />,
  },
  {
    path: '/math',
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
