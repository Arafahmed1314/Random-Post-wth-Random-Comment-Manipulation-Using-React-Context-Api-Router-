import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Components/Home.jsx';
import Layout from './Components/Layout.jsx';
import About from './Components/About.jsx';
import { Provider } from './Components/ContextApi.jsx';
import Details from './Components/Details.jsx';
import Contact from './Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/id/:id' element={<Details />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
