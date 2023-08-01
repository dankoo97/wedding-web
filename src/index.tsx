import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/main.css'
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';

import Root from "./routes/root";
import ErrorPage from './error-page';
import OurStory from './routes/story';
import OurGallery from './routes/gallery';
import GuestCode from './routes/guestCode';
import WeddingInfo from './routes/info';
import Faq from './routes/faq';
import Rva from "./routes/rva";
import RSVP from './routes/rsvp'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "info",
        element: <WeddingInfo />
      },
      {
        path: "story",
        element: <OurStory />
      },
      {
        path: "gallery",
        element: <OurGallery />
      },
      {
        path: "guest-code",
        element: <GuestCode />
      },
      {
        path: "faq",
        element: <Faq />
      },
      {
        path: "rva",
        element: <Rva />
      }, {
        path: "rsvp",
        element: <RSVP />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
