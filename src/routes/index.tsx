import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import HomePage from '@/pages/Home/HomePage';
import { RouteError } from '@/pages/RouteError';

const AboutPage = lazy(() => import('@/pages/About/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/Services/ServicesPage'));
const ServiceDetailPage = lazy(() => import('@/pages/Services/ServiceDetailPage'));
const IndustriesPage = lazy(() => import('@/pages/Industries/IndustriesPage'));
const TechnologiesPage = lazy(() => import('@/pages/Technologies/TechnologiesPage'));
const ContactPage = lazy(() => import('@/pages/Contact/ContactPage'));
const CareersPage = lazy(() => import('@/pages/Careers/CareersPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        errorElement: <RouteError />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'services', element: <ServicesPage /> },
          { path: 'services/:slug', element: <ServiceDetailPage /> },
          { path: 'industries', element: <IndustriesPage /> },
          { path: 'technologies', element: <TechnologiesPage /> },
          { path: 'contact', element: <ContactPage /> },
          { path: 'careers', element: <CareersPage /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
]);
