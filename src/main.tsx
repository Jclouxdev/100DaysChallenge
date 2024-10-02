import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import ProfileCard from './routes/01_ProfileCard/ProfileCard';
import AddToCart from './routes/02_AddToCart/AddToCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/001-profile-card",
        element: <ProfileCard />,
      },
      {
        path: "/002-add-to-cart",
        element: <AddToCart />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
