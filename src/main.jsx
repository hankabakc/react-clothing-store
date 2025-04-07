import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter'ı import ettik
import { Provider } from 'react-redux';
import { store } from './store/store.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>  {/* App bileşenini BrowserRouter ile sarıyoruz */}
      <App />
    </BrowserRouter>
  </Provider>
);
