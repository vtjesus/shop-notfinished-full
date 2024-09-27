import { Navigate } from 'react-router-dom'
import type { RouteRecord } from 'vite-react-ssg'

// layouts
import { AppLayout } from '@/layouts/AppLayout'

// pages
import { HomePage } from '@/pages/HomePage'
import { ProductPage } from '@/pages/ProductPage'
import { DeliveryAndReturnsPage } from '@/pages/DeliveryAndReturnsPage'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <AppLayout />,
    entry: 'src/layouts/AppLayout/index.ts',
    children: [
      {
        index: true,
        element: <HomePage />,
        entry: 'src/pages/HomePage/index.tsx',
      },
      {
        path: '/product/:productId',
        element: <ProductPage />,
        entry: 'src/pages/ProductPage/index.tsx',
      },
      {
        path: '/delivery-and-returns',
        element: <DeliveryAndReturnsPage />,
        entry: 'src/pages/DeliveryAndReturnsPage/index.tsx',
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]
