import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import React from 'react';
import Header from './Header';
import App from './App';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  // { path: 'products', element: <ProductsPage /> },
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductPage /> },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
