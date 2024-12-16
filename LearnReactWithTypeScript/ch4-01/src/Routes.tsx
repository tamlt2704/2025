import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import React from 'react';
import { lazy, Suspense } from 'react';
import Header from './Header';
import App from './App';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Contactpage from './pages/Contactpage';
import ContactPageUncontrolledField, {
  contactPageUncontrolledFieldAction,
} from './pages/ContactPageUncontrolledFields';
import ThankyouPage from './pages/ThankyouPage';

const AdminPage = lazy(() => import('./pages/AdminPage'));
const router = createBrowserRouter([
  // { path: 'products', element: <ProductsPage /> },
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      {
        path: 'contact',
        element: <ContactPageUncontrolledField />,
        action: contactPageUncontrolledFieldAction,
      },
      { path: 'thankyou/:name', element: <ThankyouPage /> },
      { path: 'products/:id', element: <ProductPage /> },
      {
        path: 'admin',
        element: (
          <Suspense fallback={<div className="text-center p-5 text-xl">Loading....</div>}>
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
