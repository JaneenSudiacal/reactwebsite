import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
// import App from './App';
import Root from './routes/Root';
import About from './routes/About';
import Recipes from './routes/Recipes';
import Contact from './routes/Contact';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'recipes',
    element: <Recipes />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
