import StylesProvider from '@styles/StyledProvider';
import ReactQueryInitSetting from '@utils/common/ReactQueryInitSetting';
import { AnimatePresence } from 'framer-motion';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, useLocation } from 'react-router';
import { browserRouter } from 'routes';

const App = () => {

  return (
    <StrictMode>
      <HelmetProvider>
        <StylesProvider>
          <ReactQueryInitSetting>
            <Toaster />
            <AnimatePresence mode="wait">
              <RouterProvider router={browserRouter} />
            </AnimatePresence>
          </ReactQueryInitSetting>
        </StylesProvider>
      </HelmetProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
