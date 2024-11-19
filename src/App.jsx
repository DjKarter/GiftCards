import './styles.css';
import 'regenerator-runtime/runtime';
import { StorePage } from './pages/StorePage/StorePage';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { PaymentPage } from './pages/PaymentPage/PaymentPage';
import { FormPage } from './pages/FormPage/FormPage';



const App = () => {
  return (
    <div className="page">
      <BrowserRouter basename="/GiftCards">
        <Routes>
          <Route path="/" element={<StorePage/>} />
          <Route path="/form" element={<FormPage/>} />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

//<RouterProvider router={router} />
