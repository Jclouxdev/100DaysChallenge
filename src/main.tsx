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
import MobileNavigation from './routes/03_MobileNavigation/MobileNavigation';
import { Recipe } from './routes/05_Recipe/Recipe';
import { ImageCarousel } from './routes/06_ImageCarousel/ImageCarousel';
import { CreateAccount } from './routes/07_CreateAccount/CreateAccount';

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
      },
      {
        path: "/003-mobile-navigation",
        element: <MobileNavigation />,
      },
      {
        path: "/005-recipe",
        element: <Recipe />,
      },
      {
        path: "/006-image-carousel",
        element: <ImageCarousel />,
      },
      {
        path: "/006-create-account",
        element: <CreateAccount />,
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
