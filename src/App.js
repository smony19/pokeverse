import React from 'react';
import {Home } from './routes/Home';
import {Favourites } from './routes/Favourites';
import { FavouritesProvider } from './FavouritesProvider';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/> } />
      <Route path='/favourites' element={<Favourites/>} />
    </Route>
  )
)

function App() {
  return (
    <FavouritesProvider>
      <RouterProvider router={router} />
    </FavouritesProvider>
  );
}

export default App;
