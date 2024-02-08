import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Movies from './Movies/Movies.jsx';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
