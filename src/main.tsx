import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import LoadingSpinner from '@/components/loadingspinner/LoadingSpinner';
import '@/styles/global.scss';

const App = lazy(() => import('@/app/App'));
const ProjectDetail = lazy(() => import('@/views/projects/ProjectDetail'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </Router>
    </AppProvider>
  </React.StrictMode>,
);
