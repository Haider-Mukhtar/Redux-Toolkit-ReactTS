import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from './App.tsx';
import './assets/css/index.css';
import store, { persistor } from './store/index.ts';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Toaster richColors={true} duration={1500} />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
