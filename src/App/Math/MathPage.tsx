import { createElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainBlock, } from 'components/MainBlock';
import { MainListBlock } from 'components/MainListBlock';

import { Links } from './Links';
import { PAGES } from './pages';

export function MathPage() {
  return (
    <MainListBlock>
      <MainBlock>
        <h1>Math</h1>
      </MainBlock>
      <MainBlock>
        <Routes>
          {PAGES.map((page) => (
            <Route
              key={page.name}
              path={page.component.name}
              element={createElement(page.component)}
            />
          ))}
          <Route path="*" element={<Links />} />
        </Routes>
      </MainBlock>
    </MainListBlock>
  );
}
