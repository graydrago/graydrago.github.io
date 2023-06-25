import { createRoot } from 'react-dom/client';
import { App } from './App';

import './styles.css';

const ROOT_ID = 'application';

const root = document.getElementById(ROOT_ID);

if (!root) {
  throw new Error(`root("#${ROOT_ID}") element was not found`);
}

createRoot(root)
  .render(<App />);
