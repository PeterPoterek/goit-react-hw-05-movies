import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  const [currentMovie, setCurrentMovie] = useState(movieId);
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM4YjU4MjhiNGVjNGMwZjU5YzFkZTVlMmQ1ZTNiOCIsInN1YiI6IjY1YzNhMDVlMmZlMmZhMDE4NDJhODNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V9SAFWmxQkdTT5KUPdr_PSuh1d-FJ7WmxFeruZ9_Y5Q',
      },
    };

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${currentMovie}/credits?language=en-US`,
        options
      )
      .then(response => {
        setCastList(response.data.cast);
      })
      .catch(err => console.error(err));
  }, [currentMovie]);

  return (
    <>
      {castList.map(castListItem => (
        <div key={castListItem.id}>
          {castListItem.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w185${castListItem.profile_path}`}
              alt={castListItem.name}
            />
          )}

          <p>{castListItem.name}</p>
          <p>Character: {castListItem.character}</p>
        </div>
      ))}
    </>
  );
};

export default Cast;
