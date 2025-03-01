import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from '@/context/AppContext';
import '@/styles/global.scss';

const App = lazy(() => import('@/components/app/App'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </AppProvider>
  </React.StrictMode>,
);
