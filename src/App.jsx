import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './Pages/Home';
import DetailPage from './Pages/DetailPage';
import PaymentPage from './Pages/PaymentPage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path='/payment' element={<PaymentPage />} />

      </Routes>
    </Provider>
  );
}

export default App;
