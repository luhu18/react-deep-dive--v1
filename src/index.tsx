import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from '../src/App';
import { register as registerServiceWorker } from './serviceWorkerRegistration';


registerServiceWorker()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);



