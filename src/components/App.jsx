import { useEffect } from 'react';
import axios from 'axios';

import Navbar from './Navbar/Navbar.jsx';

export const App = () => {
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTQ4MjQ0ZDExZTA2ZWZmYWI5YTlmNzcyYjNkNTZkNSIsInN1YiI6IjY1YzNhMDVlMmZlMmZhMDE4NDJhODNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ScnllNORtvUmvsjjjXP4A6vybDJMgX-vlcvg-Jewp1w',
      },
    };

    axios
      .get(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        options
      )
      .then(response => console.log(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};
